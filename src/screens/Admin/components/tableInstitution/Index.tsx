
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
import { Institution } from '../../../../Types/Institution';
import "./style.css"
interface Props {
	header?: {
		name: string;
		t2: string;//vai variar de acordo com a tela, podendo ser cidade ou CPF
	}
	name?: string;
	t2?: string; //vai variar de acordo com a tela, podendo ser cidade ou CPF
	user?: Array<Institution> | undefined;
	isAdmin?: boolean;
	isInstitution?: boolean;

}

export default function TableInstitution({ header, name, t2, user, isAdmin, isInstitution }: Props) {


	const auth = useAuth()
	const navigate = useNavigate()


	const [selectedUser, setSelectedUser] = useState<Array<Institution>>()
	const [itemCopy2, setItemCopy2] = useState<User[] | undefined>();

	const itemCopy = user
	const onDelete = async (index: any, id: string) => {

		itemCopy?.splice(index, 1)
		setSelectedUser(itemCopy)

		await api.delete(`/institutions/${id}`, {
			headers: {
				'Authorization': `Bearer ${auth.tokenContext}`,
			},
			withCredentials: true
		});

	}

	return (
		<div className='table-content'>

			<Box className="table-box">
				<table className='table'>

					<thead>
						<tr className="header">
							<th>{header?.name}</th>
							<th>Cidade</th>
							<th>{header?.t2}</th>
							<th>Email</th>
							{isInstitution ? <th style={{ display: "none" }}>Ação</th> : <th>Ação</th>}
						</tr>
					</thead>

					<tbody>
						{
							itemCopy?.map((institution: any, index: any) => {

								return (
									<tr key={institution.institution_id}>
										<td>{institution.institution_name}</td>
										<td>{institution.address.city}</td>
										<td>{institution.phone}</td>
										<td>{institution.email}</td>
										{/* <td>Cidade</td> */}


										{!isInstitution && <td>

											{!isAdmin && !isInstitution && <Link to={"instituitions/user/editar"}><ModeEditIcon /></Link>}
											{isAdmin ? <DeleteIcon onClick={() => onDelete(index, institution.institution_id)} /> : <DeleteIcon onClick={() => onDelete(index, institution.institution_id)} />}
										</td>}
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
