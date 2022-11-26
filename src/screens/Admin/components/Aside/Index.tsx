

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import "./style.css"
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ModalButton from '../Modal/Index';

interface Props {
	subTitleOne?: string
	subTitleTwo?: string
	subTitleTree?: string
	subTitleFour?: string


	isIconActive?: boolean

	link1?: string;
	link2?: string;
	link3?: string;

	height?: string;
	isActiveOut?: boolean;
	onClickButton?: React.MouseEventHandler<HTMLButtonElement>

}

export const Aside = ({ subTitleOne, link1, onClickButton, subTitleTwo, subTitleTree, isIconActive, height, isActiveOut = true, link2 }: Props) => {


	return (
		<article className="article-lateral" style={{ height: height }}>

			<Box className='article-lateral-menu'>
				<Box className="content-icons menu">
					<h2 className='title-admin'>Menu</h2>
					<WidgetsRoundedIcon sx={{ width: "1.8rem", height: "1.8rem" }} />
				</Box>
				<Box className="content-icons">
					<Link to={`${link1}`}>
						<h3 className='subtitle-admin'>{subTitleOne}</h3>
					</Link>
					<HomeOutlinedIcon sx={{ width: "1.8rem", height: "1.8rem" }} />
				</Box>
				<Box className="content-icons">
					<Link to={`${link2}`}>
						<h3 className='subtitle-admin'>{subTitleTwo}</h3>
					</Link>
					<AccountCircleOutlinedIcon sx={{ width: "1.8rem", height: "1.8rem" }} />

				</Box>
				<Box className="content-icons">
					<Link to="">
						<h3 className='subtitle-admin'>{subTitleTree}</h3>
					</Link>
					{isIconActive && <ModeEditOutlineOutlinedIcon sx={{ width: "1.8rem", height: "1.8rem" }} />}
				</Box>
			</Box>
			{isActiveOut && <ModalButton title='Excluir cadastro' onClickButton={onClickButton} text={"Tem certeza que deseja excluir seu cadastro?"} />}
		</article>
	)
}
