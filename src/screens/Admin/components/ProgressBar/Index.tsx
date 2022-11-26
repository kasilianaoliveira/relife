import { Box } from '@mui/material';
import React from 'react'
import "./style.css";

export const ProgressBar = () => {
	return (
		<section className="content-card">
			<Box className="site-card-border-less-wrAdminer">
				<Box className="content-title">
					<h1 className='title-progress'>Progresso de doações esse mês</h1>
				</Box>
				<Box className="content-bar-progress">
					<Box className="data-content">
						<Box className="content-30">
							<h2>Tecido</h2>
						</Box>
						<Box className="content-70">
							<Box className="progress-bar"></Box>
							<h3>26/30</h3>
						</Box>
					</Box>
					<Box className="data-content">
						<Box className="content-30">
							<h2>Órgãos</h2>
						</Box>
						<Box className="content-70">
							<Box className="progress-bar"></Box>
							<h3>14/30</h3>
						</Box>
					</Box>
				</Box>
			</Box>
		</section>
	)
}
