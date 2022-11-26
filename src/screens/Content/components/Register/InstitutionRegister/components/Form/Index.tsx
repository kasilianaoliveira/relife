
import { Alert, Snackbar } from '@mui/material';
import { Box } from '@mui/system'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';
import { Institution } from '../../../../../../../Types/Institution';
import "./style.css"
import { api } from '../../../../../../../services/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../../../../context/useAuth';



export const FormInstitution = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [cnpj, setCNPJ] = useState("");
	const [responsibleName, setResponsibleName] = useState("");
	const [phone, setPhone] = useState("");
	const [country, setCountry] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmed, setPasswordConfirmed] = useState("");
	const [cep, setCEP] = useState("");
	const [street, setStreet] = useState("");
	const [number, setNumber] = useState("");
	const [complement, setComplement] = useState("");
	const [city, setCity] = useState("");
	const [uf, setUF] = useState("");
	const [district, setDistrict] = useState("");

	const [open, setOpen] = useState(false);

	const [message, setMessage] = useState("");


	const navigate = useNavigate()

	const { register, handleSubmit, formState: { errors }, setValue } = useForm<Institution>({
		mode: "all",
	});

	const handleCheckPostalCode = (data: React.ChangeEvent<HTMLInputElement>) => {
		const postalCode = data.target.value
		setCEP(postalCode)
		if (postalCode?.length !== 8) {
			setValue('city', '')
			setValue('uf', '')
		}


		fetch(`https://viacep.com.br/ws/${postalCode}/json/`)
			.then((response) => response.json())
			.then((data) => {
				setValue('city', data.localidade)
				setValue('uf', data.uf)
			})
	}
	const verificarCampos = async () => {
		const response = await api.get("/institutions");
		const data = response.data

		// eslint-disable-next-line array-callback-return
		data.map((institution: Institution) => {
			if (institution.email === email) {
				setMessage("Email já cadastrado, tente outro!")

			}

			if (institution.cnpj === cnpj) {
				setMessage("CNPJ já cadastrado, tente outro!")
			}

			if (institution.phone === phone) {
				setMessage("Telefone já cadastrado, tente outro!")
			}
		})
	}

	const auth = useAuth()

	const onSubmitHandler = async (data: Institution) => {

		const user = {
			role: "INSTITUTION",
			institution_name: name,
			responsible_name: responsibleName,
			cnpj: cnpj,
			phone: phone,
			email: email,
			password: password,

			zip_code: cep,
			country: country,
			uf: uf,
			city: city,
			district: district,
			street: street,
			number: number,
			complement: complement,
		}

		try {
			const response = await api.post("/institutions", user)
			navigate("/dashboard/admin")
			// auth.setAddNewInstitution(response.data)

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
					<label htmlFor='name'>Nome*</label>
					<input {...register("institution_name", { required: "Nome é um campo obrigatório" })} placeholder="Nome da instituição" onChange={(e) => setName(e.target.value)} className="input-text" />
					<p className="error-message">{errors.institution_name?.message}</p>
				</Box>
				<Box>
					<label htmlFor='responsible_name'>Nome do responsável*</label>
					<input {...register("responsible_name", { required: "Nome do responsável é um campo obrigatório" })} placeholder="Digite o nome do responsável" className="input-text" onChange={(e) => setResponsibleName(e.target.value)} />
					<p className="error-message">{errors.responsible_name?.message}</p>
				</Box>
				<Box>
					<label htmlFor='cnpj'>CNPJ*</label>
					<ReactInputMask mask="99.999.999/9999-99" {...register("cnpj", { required: "CPNJ é um campo obrigatório", min: 14 })} placeholder="Digite o CNPJ" className="input-text" onChange={(e) => setCNPJ(e.target.value)} />
					<p className="error-message">{errors.cnpj?.message}</p>
				</Box>

			</Box>

			<Box className="info-details">
				<Box className="smaller-input">
					<Box className="label-style">
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
			</Box>

			<Box className="address">
				<Box className="smaller-input">
					<Box className="label-style">
						<label htmlFor='country'>Pais*</label>
						<input {...register("country", { required: "Pais é um campo obrigatório" })} placeholder="Pais" onChange={(e) => setCountry(e.target.value)} />
						<p className="error-message">{errors.country?.message}</p>
					</Box>

					<Box className="label-style">
						<label htmlFor='zip_cod'>CEP*</label>
						<ReactInputMask mask="99999-999" {...register("zip_code", { required: "CEP é um campo obrigatório", min: 8 })} placeholder="Ex: 00000-000" onChange={(e) => handleCheckPostalCode(e)} />
						<p className="error-message">{errors.zip_code?.message}</p>
					</Box>
				</Box>
				<Box className="smaller-input">
					<Box>
						<Box className="label-style">
							<label htmlFor='street'>Rua*</label>
							<input {...register("street", { required: "Rua é um campo obrigatório" })} placeholder="Rua" onChange={(e) => setStreet(e.target.value)} />
							<p className="error-message">{errors.street?.message}</p>
						</Box>

						<Box className="label-style">
							<label htmlFor='number'>Número</label>
							<input {...register("number")} placeholder="Número" onChange={(e) => setNumber(e.target.value)} />
						</Box>
					</Box>
				</Box>

				<Box className="smaller-input">
					<Box className="label-style">
						<label htmlFor='complement'>Complemento</label>
						<input {...register("complement")} placeholder="Complemento" onChange={(e) => setComplement(e.target.value)} />
					</Box>
					<Box className="label-style">
						<label htmlFor='district'>Bairro*</label>
						<input {...register("district", { required: "Bairro é um campo obrigatório" })} placeholder="Bairro" onChange={(e) => setDistrict(e.target.value)} />
						<p className="error-message">{errors.district?.message}</p>
					</Box>
				</Box>

				<Box className="smaller-input">
					<Box className="label-style">
						<label htmlFor='city'>Cidade*</label>
						<input {...register("city", { required: "Cidade é um campo obrigatório" })} placeholder="Cidade" onChange={(e) => setCity(e.target.value)} />
						<p className="error-message">{errors.city?.message}</p>
					</Box>
					<Box className="label-style">
						<label htmlFor='uf'>Estado*</label>
						<input {...register("uf", { required: "Estado é um campo obrigatório" })} placeholder="Estado" onChange={(e) => setUF(e.target.value)} />
						<p className="error-message">{errors.uf?.message}</p>
					</Box>
				</Box>

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
