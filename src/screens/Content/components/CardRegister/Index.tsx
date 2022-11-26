import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Content } from '../../Index'
import { Titles } from '../Title/Index'
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Diversity2Icon from '@mui/icons-material/Diversity2';

import "./style.css"
import { useAuth } from '../../../../context/useAuth'

export const CardRegister = () => {


	const { handleClick } = useAuth()

	return (
		<Box className='content-main-form'>
			<Content />
			<Box className='login login-form'>
				<Titles title="Cadastro" subtitle="Selecione uma opção para prosseguir" />

				<Link to="/cadastro/usuario">
					<button className="card" value={"DONOR"} onClick={() => handleClick("DONOR")}>
						<Diversity1Icon sx={{ width: "2rem", height: "2rem" }} />
						<Box className='card-box'>
							<h2>Doador</h2>
							<span>Seja um doador e ajude diversas outras pessoas</span>
						</Box>
					</button>
				</Link>

				<Link to="/cadastro/usuario">
					<button className="card" value={"RECEIVER"} onClick={() => handleClick("RECEIVER")}>
						<Diversity2Icon sx={{ width: "2rem", height: "2rem" }} />
						<Box>
							<h2>Receptor</h2>
							<span>Seja um receptor e adicione as informações necessárias para entrar na lista</span>
						</Box>
					</button>
				</Link>
				<p className='register-card'>Já tem uma conta ? <Link className='link-register link-register-span' to="/login">Faça login</Link></p>
			</Box>
		</Box>
	)
}
