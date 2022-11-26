import { Box } from '@mui/material'
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./style.css"

interface IHeaderTitles {
	link?: string
	title?: string
	subTitle?: string
}

export const HeaderRegister = ({ link = "/cadastro", title = "Cadastro", subTitle = "Agora vamos precisar de algumas informações pessoais para prosseguir com o cadastro!" }: IHeaderTitles) => {

	const navigate = useNavigate()
	return (
		<>
			<Box className="header-register">
				{/* <Link to={link}> */}
				<ArrowBackIcon sx={{ width: "2rem", height: "2rem" }} onClick={() => navigate(-1)} />
				{/* </Link> */}
				<h1>{title}</h1>
			</Box>
			<p className="description">{subTitle}</p>
		</>
	)
}
