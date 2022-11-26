
import { Box } from "@mui/material";
import ContentRegister from "../components/ContentRegister/Index";
import { FormAdmin } from "./components/Form/Index";

export default function FormRegisterAdmin() {


	return (
		<Box className="content-main-form ">
			<ContentRegister height={"50rem"} top={"2rem"} />
			<FormAdmin />
		</Box>
	);
}
