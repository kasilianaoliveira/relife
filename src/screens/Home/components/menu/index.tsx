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
						<a href="#instituicoes-parceiras">
							Instituições parceiras
						</a>
					</li>
					<li>
						<a href="#informe-se">
							Informe-se
						</a>
					</li>
					<li>
						<a href="#contato">
							Entre em contato
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
