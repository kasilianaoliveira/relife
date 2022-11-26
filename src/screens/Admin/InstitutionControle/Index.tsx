
import { Box } from "@mui/system";
import { Header } from "../components/Header/Index";
import { Aside } from "../components/Aside/Index";
import TableContent from "../components/table/Index";
import "./style.css";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { ButtonFilter } from "../components/table/components/ButtonFilter/Index";
import { Skeletons } from "./Skeleton";
import { useAuth } from "../../../context/useAuth";
import { useNavigate } from "react-router-dom";

function InstitutionController() {

	const [search, setSearch] = useState('');

	const [name, setName] = useState<string | undefined>('')
	const [buttonEnabled, setButtonEnabled] = useState(true)
	const auth = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		const email = auth.email
		setName(email)

	}, [auth.email])


	const buttonClickUser2 = () => {
		setButtonEnabled(true)
	}
	const buttonClickUser3 = () => {
		setButtonEnabled(false)
	}

	const filterUser = auth.resultUser?.filter(user => user.cpf?.startsWith(search));
	const filterButtonAll = auth.resultUser?.filter(user => !user.institution_id || !user.blood_type)
	const filterInstitution = auth.resultUser?.filter(user => user.institution_id === auth.id)

	const buttonClickUser = () => {
		return < TableContent header={{ name: "Nome", t2: "CPF" }} user={filterUser} />
	}

	const deleteUser = async () => {
		await api.delete(`/institutions/${auth.email}`);
		auth.setUserLocalStorage(null)
		navigate("/login")
	};

	return (
		<Box className="body">
			<Box className="content">
				<Box className="submenu">
					<Header role="Instituição" name={name} />
					<ButtonFilter placeholder="Digite o CPF do usuário" isInputActive={true} buttonOne="Todos" buttonTwo="Pendentes" buttonTree="Usuários associados"
						onClickButtonTwo={buttonClickUser2} onClickButtonOne={buttonClickUser} onClickButtonTree={buttonClickUser3} valueInput={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} isButtonActiveTree />
					{!auth.loading && <Skeletons />}
					< TableContent header={{ name: "Nome", t2: "CPF" }} user={buttonEnabled ? filterButtonAll : filterInstitution} />
				</Box>
				<Aside subTitleOne="Home" subTitleTwo="Atualizar meu cadastro" isIconActive={false} isActiveOut={false} />
			</Box>
		</Box>
	);
}

//onClickButtonTwo={() => filterButtonAll}

export default InstitutionController;
