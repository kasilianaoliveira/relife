
import { Box } from '@mui/system'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';

import { Admin } from '../../../../../../../Types/Admin';
import "./style.css"
import { api } from '../../../../../../../services/api';
import { useNavigate } from 'react-router-dom';
import { Alert, Snackbar } from '@mui/material';



export const FormAdmin = () => {


	const { register, handleSubmit, formState: { errors } } = useForm<Admin>({
		mode: "all",
	});

	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmed, setPasswordConfirmed] = useState("");
	const [open, setOpen] = useState(false);

	const [message, setMessage] = useState("");


	const navigate = useNavigate()

	const verificarCampos = async () => {
		const response = await api.get("/69ed90c76a11b9a7ee11467ef09503dbec35dbc7be84ba664a098c859416228b");
		const data = response.data
		// eslint-disable-next-line array-callback-return
		data.map((admin: Admin) => {
			if (admin.email === email) {
				setMessage("Email já cadastrado, tente outro!")

			}

			if (admin.phone === phone) {
				setMessage("Telefone já cadastrado, tente outro!")
			}
		})
	}

	const onSubmitHandler = async (data: Admin) => {

		const user = {
			role: "ADMIN",
			phone: phone,
			email: email,
			password: password,
		}

		try {
			await api.post("/69ed90c76a11b9a7ee11467ef09503dbec35dbc7be84ba664a098c859416228b", user)
			navigate("/dashboard/admin")

		} catch (error) {
			verificarCampos()
			setOpen(true)
		}
	}
	const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false)
	};

	return (
		<form onSubmit={handleSubmit(onSubmitHandler)} className="form-register">
			<Box className="info">
				<Box>
					<label htmlFor='email'>Email*</label>
					<input {...register("email", {
						required: "Email é um campo obrigatório", pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'Digite um email válido',
						}
					})} placeholder="Ex: email@gmail.com" name="email" className="input-text"
						onChange={(e) => setEmail(e.target.value)} />
					<p className="error-message">{errors.email?.message}</p>
				</Box>
				<Box className="label-style">
					<label htmlFor='phone'>Telefone*</label>
					<ReactInputMask mask="(99) 99999-9999" {...register("phone", { required: "Telefone é um campo obrigatório", min: 11 })} placeholder="(88)98888-8888" className="input-text" onChange={(e) => setPhone(e.target.value)} />
					<p className="error-message">{errors.phone?.message}</p>
				</Box>
			</Box>

			<Box className="address">

				<Box className="smaller-input">
					<Box className="password-box">
						<h3>Para concluir o cadastro crie uma senha</h3>
						<p className='description-password'>(aconselhamos usar letras e números para maior segurança da sua conta)</p>

						<Box>
							<Box className="label-style">
								<label htmlFor='password'>Senha*</label>
								<input {...register("password", { required: "Senha é um campo obrigatório", min: 8 })} placeholder="Senha" type="password" onChange={(e) => setPassword(e.target.value)} />
								<p className="error-message">{errors.password?.message}</p>
							</Box>
							<Box className="label-style">
								<label htmlFor='passwordConfirmation'>Confirme a senha*</label>
								<input  {...register("passwordConfirmation", { required: true, min: 8 })} placeholder="Agora confirme a senha" type="password" onChange={(e) => setPasswordConfirmed(e.target.value)} />
								{/* <p className="error-message">{errors.passwordConfirmation?.message}</p> */}
								{password !== passwordConfirmed && <p className="error-message">As senhas precisam ser iguais</p>}

							</Box>
						</Box>
					</Box>
				</Box>

			</Box>
			<button type="submit" className='button-submit register'>Cadastrar</button>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
				<Alert onClose={handleClose} sx={{ width: '100%' }} severity="warning">{message}</Alert>
			</Snackbar >
		</form >
	)
}
