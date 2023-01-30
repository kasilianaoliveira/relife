
import orgaos from "../../../assets/maos-coracao.png"
import tecido from "../../../assets/tecido.png"
import { Button } from "../components/Button/Index"

import styles from "./CardInformation.module.css"

export const CardInformation = () => {
	return (
		<section className={styles.container} id='informe-se'>
			<div className={styles.title}>
				<h3>Informe-se</h3>
				<h2>Conheça um pouco sobre os tipos de doação</h2>
			</div>

			<div className={styles.cards}>
				<div className={styles.card}>
					<div className={styles.item}>
						<img src={orgaos} alt="Órgãos" />
						<a href="https://google.com" target="_blank" className={styles.button} rel="noreferrer">Saiba mais</a>
					</div>
					<p>Órgãos</p>
				</div>
				<div className={styles.card}>
					<div className={styles.item}>
						<img src={tecido} alt="Tecidos (Sangue)" />
						<a href="https://google.com" target="_blank" className={styles.button} rel="noreferrer">Saiba mais</a>
					</div>

					<p>Tecidos</p>
				</div>
			</div>

		</section>
	)
}
