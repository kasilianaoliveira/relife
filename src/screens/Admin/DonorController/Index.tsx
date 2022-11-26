
import { Box } from "@mui/system";
import { Header } from "../components/Header/Index";
import { Aside } from "../components/Aside/Index";
import "./style.css";
import { useAuth } from "../../../context/useAuth";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import TableInstitution from "../components/tableInstitution/Index";
import { useState } from "react";

function DonorController() {

	const auth = useAuth()
	const navigate = useNavigate()


	const [search, setSearch] = useState('');

	const [isEnabled, setIsEnabled] = useState<boolean>()

	const buttonClick = () => {
		setIsEnabled(true)
	}

	const buttonClick2 = () => {
		setIsEnabled(false)
	}

	const filterInstitution = auth.institutionResult?.filter(user => user.institution_name?.toLowerCase().includes(search));

	return (
		<Box className="body">
			<Box className="content">
				<Box className="submenu">
					<Header name={auth.email} />
					<TableInstitution header={{ name: "Nome", t2: "Telefone" }} user={auth.institutionResult} isInstitution />
				</Box>
				<Aside subTitleOne="Home" subTitleTwo="Editar cadastro" link2="/editar/usuario" link1="/" isActiveOut={false} />
			</Box>
		</Box>
	);
}

export default DonorController;
