
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import AdminController from '../../screens/Admin/AdminController/Index';
import { FormLogin } from '../../screens/Content/components/FormLogin/Index';
import { FormAdmin } from '../../screens/Content/components/Register/AdminRegister/components/Form/Index';
import { FormInstitution } from '../../screens/Content/components/Register/InstitutionRegister/components/Form/Index';
import { UpdateUserInstitutionRegister } from '../../screens/Content/components/UpdateScreen/UpdateUserInstitution/Index';
import InstitutionController from '../../screens/Admin/InstitutionControle/Index';

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {

	const navigate = useNavigate()

	const auth = useAuth()

	if (!auth.email) {
		return (
			<FormLogin />
		)
	}

	// if (auth.role === "ADMIN") {
	// 	navigate("/dashboard/admin")
	// } else {
	// 	navigate("/login")

	// }

	// if (auth.role === "INSTITUTION") {
	// 	navigate("/dashboard/instituicao")
	// }

	// if (auth.role === "DONOR") {
	// 	navigate("/dashboard/doador")
	// }

	// if (auth.role === "RECEIVER") {
	// 	navigate("/dashboard/receptor")
	// }


	return children

}
