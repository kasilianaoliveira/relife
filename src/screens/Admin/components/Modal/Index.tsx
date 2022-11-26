import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./style.css"
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../context/useAuth';
// import { AuthContext } from '../../../../context/Auth/AuthContext';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 500,
	height: 200,
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
};


interface IOutData {
	text: string;
	onClickButton?: React.MouseEventHandler<HTMLButtonElement>;
	title: string;
}
export default function ModalButton({ onClickButton, text, title }: IOutData) {

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	// const auth = React.useContext(AuthContext);

	const auth = useAuth()
	const navigate = useNavigate()

	const handleLogout = async () => {
		await auth.logout();
		navigate("/login")
		// eslint-disable-next-line no-self-assign
		// window.location.href = window.location.href;

	}

	return (
		<Box>
			<button onClick={handleOpen} className="button-article">
				<strong>{title}</strong>
			</button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						{text}
					</Typography>
					<Box className="style-modal">
						<button className="button-style-modal cancel" onClick={handleClose}>
							Cancelar
						</button>
						<button onClick={onClickButton} className="button-style-modal exit">Sair</button>
					</Box>
				</Box>
			</Modal>
		</Box >
	);
}
