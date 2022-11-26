
import { Alert, Snackbar } from '@mui/material';
import { Box } from '@mui/system'
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../../context/useAuth';
import { api } from '../../../../../services/api';
import { User } from '../../../../../Types/User';
import ContentRegister from '../../Register/components/ContentRegister/Index';
// import ContentRegister from '../../../components/ContentRegister/Index';
import "./style.css"


export const UpdateUserInstitutionRegister = () => {


	const [open, setOpen] = useState(false);

	const [message, setMessage] = useState("");
	const auth = useAuth()


	const { register, handleSubmit, formState: { errors } } = useForm<User>({ mode: 'all' });

	const [orgao, setOrgao] = useState('')

	const navigate = useNavigate()

	// cost
	const updateUser = async (data: User) => {

		const organs = {
			organ_type: data.organs?.organ_type,
			description: data.organs?.description

		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
		const user = {
			blood_type: data.blood_type,
			institution_id: auth.id,
			// organs:
			// organs: data
		}

		try {
			await api.put(`/institutions/users/${auth.userCPF}`, user)
			await api.put(`/institutions/users/${auth.userCPF}/organs`, organs)
			console.log(organs)


			// navigate("/dashboard/instituicao")


		} catch (error) {

		}
	}

	const onSubmitHandler = async (data: User) => {



		updateUser(data)

	}


	const list = [
		{ id: 1, name: 'Selecione' },
		{ id: 2, name: 'O-' },
		{ id: 3, name: '0+' },
		{ id: 4, name: 'A-' },
		{ id: 5, name: 'A+' },
		{ id: 6, name: 'B-' },
		{ id: 7, name: 'B+' },
		{ id: 8, name: 'AB-' },
		{ id: 9, name: 'AB+' },

	];

	const organsType = [
		{ id: 1, name: 'Selecione' },
		{ id: 2, name: 'Sólido' },
		{ id: 3, name: 'Tecido' },

	];


	return (
		<Box className="content-main-form ">
			<ContentRegister height={"100rem"} top={"18.75rem"} title="Editar" link='/dashboard/instituicao' />
			<form onSubmit={handleSubmit(onSubmitHandler)} className="form-register">

				<Box className="info">
					<Box >
						<Box className="label-style">
							<label htmlFor='blood_type'>Tipo sanguíneo</label>
							<select {...register("blood_type")} value={auth.selectValue} onChange={e => auth.setSelectValue(e.target.value)}>

								{list.map((item, index) => (
									<option key={index} value={item.name}>{item.name}</option>
								))}

							</select>
						</Box>
					</Box>
				</Box>
				<button type="submit" className='button-submit register'>Cadastrar</button>

			</form >
		</Box >
	)
}
