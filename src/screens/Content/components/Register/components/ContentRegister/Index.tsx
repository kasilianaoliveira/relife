
import { Box } from "@mui/material";
// import { Form } from "./components/Form/Index";
import "./style.css"
import Desenho from "../../../../../../assets/register-desenho.svg"
import { HeaderRegister } from "../Header/Index";

interface Props {
	height: string
	top: string
	link?: string

	title?: string
	subTitle?: string

}
//
export default function ContentRegister({ height, top, link, title, subTitle }: Props) {


	return (
		<Box className="container-register" sx={{ height: height }} >
			<HeaderRegister link={link} title={title} subTitle={subTitle} />
			<Box className="register-form">
				<img src={Desenho} alt="desenho" className='img-desenho-register' style={{ top: top }} />
			</Box>
		</Box >

	);
}
