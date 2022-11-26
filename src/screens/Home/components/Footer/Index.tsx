import { Grid } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import "./style.css"
export const Footer = () => {
	return (
		<footer >
			<Box
				px={{ xs: 3, sm: 10 }}
				py={{ xs: 5, sm: 10 }}
				bgcolor="#A9D6D3"
				color="white"
				className='footer'
			>
				<Container maxWidth="lg">
					<Grid container spacing={5}>
						<Grid item xs={12} sm={4}>
							<Box borderBottom={1} fontSize={28}>Navegue pelo Site </Box>
							<Box>
								<Link to="/">
									Sobre o projeto
								</Link>
							</Box>
							<Box>
								<Link to="/">
									Instituições parceiras
								</Link>
							</Box>
							<Box>
								<Link to="/">
									Informe-se
								</Link>
							</Box>
							<Box>
								<Link to="/">
									Entre em contato
								</Link>
							</Box>
							<Box>
								<Link to="/">
									Doe agora
								</Link>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Box borderBottom={1} fontSize={28} >Entre em contato</Box>
							<Box>
								<div>
									+1 (123) 456-7890
								</div>
								<div>
									exemple@gmail.com
								</div>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4}>

							<div className='icons'>
								<Box borderBottom={1} fontSize={28}>Redes Sociais</Box>
								<Box>
									<Link to="https://twitter.com" color="#009F70">
										<TwitterIcon />
									</Link>
									<Link to="https://youtube.com" color="#009F70">
										<YouTubeIcon />
									</Link>
									<Link to="https://facebook.com" color="#009F70">
										<FacebookIcon />
									</Link>
									<Link to="https://instagram.com" color="#009F70">
										<InstagramIcon />
									</Link>
								</Box>
							</div>
						</Grid>
					</Grid>

					<Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
						<p>
							Todos os direitos reservados | Desenvolvido pela atlantis fellowship &reg; {new Date().getFullYear()}
						</p>
					</Box>
				</Container>
			</Box>
		</footer>
	)
}
