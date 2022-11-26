
import { Box } from "@mui/material";
import ContentRegister from "../components/ContentRegister/Index";
import { FormInstitution } from "./components/Form/Index";


export default function InstitutionRegister() {


	return (
		<Box className="content-main-form ">
			<ContentRegister height={"103rem"} top={"18.75rem"} link="/dashboard/admin" />
			<FormInstitution />
		</Box>
	);
}
