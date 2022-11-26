import { Alert, Box, Snackbar } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Content } from '../../Index';
import { Titles } from '../Title/Index';

import "./style.css"

import { ChangeEvent, useState } from 'react';
import { useAuth } from '../../../../context/useAuth';

interface IFormInputs {
	email: string
	password: string
}

export const FormLogin = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [erro, setErro] = useState();
	const [open, setOpen] = useState(false);

	const navigate = useNavigate()

	const { register, formState: { errors } } = useForm<IFormInputs>({
		mode: "all",
	});


	const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	}

	const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	}

	const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false)
	};

	const auth = useAuth()

	const handleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();

		try {
			await auth.authenticate(email, password)

			if (auth.role === "ADMIN") {
				return navigate("/dashboard/admin");
			}

			if (auth.role === "INSTITUTION") {
				return navigate("/dashboard/instituicao");
			}
			if (auth.role === "RECEIVER") {
				return navigate("/dashboard/receptor");
			}
			if (auth.role === "DONOR") {
				return navigate("/dashboard/doador");
			}
			setOpen(true)


		} catch (error) {
			setErro(error)
		}
	}

	return (
		<Box className="content-main-form">
			<Content />
			<Box className='login login-form'>
				<Titles title="Login" subtitle="Adicione seus dados para prosseguir" />
				<form className="form-content">

					<input type="email" placeholder={'Digite seu email de acesso'} {...register("email", {
						required: "Email é um campo obrigatório", pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'Digite um email válido',
						}
					})} onChange={handleEmailInput} value={email} />
					<p className="error-message">{errors.email?.message}</p>
					<input type="password" placeholder='Digite sua senha' {...register("password", { required: "Digite sua senha", min: 8 })} onChange={handlePasswordInput} value={password} />

					<button
						type="submit"
						className='button-submit'
						onClick={(e) => handleLogin(e)}
					>Fazer login</button>
					<Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
						<Alert onClose={handleClose} sx={{ width: '100%' }} severity="error">Senha ou email incorreto</Alert>
					</Snackbar >
				</form>
				<Link to="/cadastro" className='link-register'>Ainda não tem uma conta ? <span className='link-register-span'>Cadastre-se</span></Link>

			</Box>
		</Box >
	);
}
