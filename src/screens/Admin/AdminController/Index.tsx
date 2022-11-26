import React, { useEffect, useState } from "react";

import "./style.css";


import { Box } from "@mui/system";
import { Header } from "../components/Header/Index";
import { ProgressBar } from "../components/ProgressBar/Index";
import { Aside } from "../components/Aside/Index";
import { useAuth } from '../../../context/useAuth';
import { api } from '../../../services/api';
import { useNavigate } from "react-router-dom";
import TableContent from '../components/table/Index';
import { User } from "../../../Types/User";
import { ButtonFilter } from "../components/table/components/ButtonFilter/Index";
import { Skeletons } from "../InstitutionControle/Skeleton";
import TableInstitution from "../components/tableInstitution/Index";
// import { Skeletons } from '../InstitutionControle/Skeleton/index';

function AdminController() {


	const [search, setSearch] = useState('');
	const [clickTable, setClickTable] = useState<boolean>(true);


	const [name, setName] = useState<string | undefined>('')

	const auth = useAuth();
	const navigate = useNavigate();


	useEffect(() => {
		const email = auth.email
		setName(email)

	}, [auth.email])


	const filterUser = auth.resultUser?.filter(user => user.cpf?.startsWith(search));
	const filterInstitution = auth.institutionResult?.filter(user => user.institution_name?.toLowerCase().includes(search));

	const buttonClickUser = () => {
		setClickTable(true)
	}
	const buttonClickUser2 = () => {
		setClickTable(false)
	}

	const deleteUser = async () => {
		await api.delete(`/69ed90c76a11b9a7ee11467ef09503dbec35dbc7be84ba664a098c859416228b/${auth.email}`);
		auth.setUserLocalStorage(null)
		navigate("/login")
	};


	return (
		<Box className="body">
			<Box className="content">
				<Box className="submenu">
					<Header role="Admin" name={name} />
					{/* <ProgressBar /> */}
					<ButtonFilter placeholder={clickTable ? "Digite o CPF do usuário" : "Digite o nome da instituição"} isInputActive={true} buttonOne="Usuários" buttonTwo="Instituições" valueInput={search} isButtonActiveTree={false} onChange={(e) => setSearch(e.target.value.toLowerCase())} onClickButtonOne={buttonClickUser} onClickButtonTwo={buttonClickUser2} />
					{!auth.loading && <Skeletons />}
					{clickTable ? <TableContent header={{ name: "Nome", t2: "CPF" }} user={filterUser} isAdmin /> : <TableInstitution header={{ name: "Nome", t2: "Telefone" }} user={filterInstitution} isAdmin />}
				</Box>
				<Aside subTitleOne="Home" subTitleTwo="Cadastrar instituição" isIconActive={false} onClickButton={deleteUser} link2={"/cadastro/instituicao"} />
			</Box>
		</Box>
	);
}

export default AdminController;
