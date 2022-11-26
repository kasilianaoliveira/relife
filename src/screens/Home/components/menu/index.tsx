import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import Logo from "../../../../assets/logo-menu.png"
export const Menu = () => {
	return (
		<header className='header'>
			<nav>
				<div className="logo">
					<Link to="/">
						<img src={Logo} alt="ReLife logo" className='logo' />
					</Link>
				</div>
				<ul>
					<li className='doe'>
						<Link to="/login">
							Cadastre-se agora
						</Link>
					</li>
					<li>
						<Link to="/institutions">
							Instituições parceiras
						</Link>
					</li>
					<li>
						<Link to="/informed">
							Informe-se
						</Link>
					</li>
					<li>
						<Link to="/#">
							Entre em contato
						</Link>
					</li>
					<li>
						<Link to="/about">
							Sobre o projeto
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
