import { Link } from 'react-router-dom'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import styles from "./Footer.module.css"

export const Footer = () => {
	return (
		<footer className={styles.footer} >
			<div className={styles.content}>
				<div className={styles.socialNavigation}>
					<div className={styles.navigation}>
						<h3>Navegue pelo site</h3>
						<ul>
							<li><a href="">Sobre o projeto</a></li>
							<li><a href=""> Instituições parceiras</a></li>
							<li><a href="">Informe-se</a> </li>
							<li><a href="">Entre em contato</a> </li>
						</ul>
					</div>
					<div className={styles.social}>

						<Link to="https://facebook.com" >
							<FacebookIcon />
						</Link>
						<Link to="https://instagram.com" >
							<InstagramIcon />
						</Link>
						<Link to="https://youtube.com">
							<YouTubeIcon />
						</Link>
					</div>
				</div>
				<div className={styles.copy}>
					<p>
						Todos os direitos reservados | Desenvolvido pela atlantis fellowship &reg; {new Date().getFullYear()}
					</p>
				</div>

			</div>
		</footer>
	)
}
