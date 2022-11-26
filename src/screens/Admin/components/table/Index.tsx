
import CreateIcon from '@mui/icons-material/Create';
import { Box } from '@mui/system';
import { ButtonFilter } from './components/ButtonFilter/Index';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

import "./style.css"
import { User } from '../../../../Types/User';
import { useEffect, useState } from 'react';
import { api } from '../../../../services/api';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../context/useAuth';



interface Props {
	header?: {
		name: string;
		t2: string;//vai variar de acordo com a tela, podendo ser cidade ou CPF
	}
	name?: string;
	t2?: string; //vai variar de acordo com a tela, podendo ser cidade ou CPF
	user?: Array<User> | undefined;
	isAdmin?: boolean;
}

export default function TableContent({ header, name, t2, user, isAdmin }: Props) {


	const auth = useAuth()
	const navigate = useNavigate()
	const [selectedUser, setSelectedUser] = useState<Array<User>>()
	const [sangue, setSangue] = useState<Array<User>>();


	const itemCopy = user

	const onDelete = async (index: any, cpf: string) => {

		itemCopy?.splice(index, 1)

		setSelectedUser(itemCopy)

		await api.delete(`/users/${cpf}`, {
			headers: {
				'Authorization': `Bearer ${auth.tokenContext}`,
			},
			withCredentials: true
		});
	}

	useEffect(() => {
		// window.location.reload();

	}, [itemCopy])


	const updateExport = async (index: any, cpf: string) => {

		await auth.setUserCPF(cpf)

		navigate("/r/editar/usuario")
	}

	return (
		<div className='table-content'>

			<Box className="table-box">
				<table className='table'>

					<thead>
						<tr className="header">
							<th>{header?.name}</th>
							<th>{header?.t2}</th>
							<th>Tipo</th>
							<th>Tipo sanguineo</th>
							<th>Ação</th>
						</tr>
					</thead>

					<tbody>
						{

							itemCopy?.map((user: any, index: any) => {
								return (
									<tr key={user.user_id}>
										<td>{user.full_name}</td>
										<td>{user.cpf}</td>
										<td>{user.role}</td>
										<td>{user.blood_type}</td>

										<td>
											{!isAdmin && <ModeEditIcon onClick={() => updateExport(index, user.cpf)} />}
											{isAdmin && <DeleteIcon onClick={() => onDelete(index, user.cpf)} />}
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</Box>
		</div>
	);
}
