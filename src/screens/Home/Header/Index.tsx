import React from 'react'
import { Menu } from '../components/menu/index';
import { Info } from '../Infos/Index';
import foto from '../../../assets/banner-profile.png'


import styles from "./Header.module.css"
import { Button } from '../components/Button/Index';

export const HeaderComponents = () => {
	return (
		<div className={styles.container}>
			<Menu />
			<div className={styles.content}>
				<div>
					<h3>Boas-vindas ao Relife 👋</h3>
					<h1>Nem todo héroi usa capa</h1>
					<p>Doar órgãos ajuda quem sobrevive, e torna a vida de quem partiu ainda mais significativa</p>
					<Button title='Cadastre-se' link='/login' />
				</div>
				<img src={foto} alt="Mulher apoiando" className={styles.logo} />
			</div>
			<Info />
		</div>
	)
}
