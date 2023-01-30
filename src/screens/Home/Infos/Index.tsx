import React from 'react'
import styles from "./Info.module.css"

export const Info = () => {
	return (
		<section className={styles.information}>
			<div className={styles.cards}>
				<div>
					<h3>+3200</h3>
					<p>Doadores absolutos em 2021 no Brasil</p>
				</div>
				<div>
					<h3>+43%</h3>
					<p>De famílias recusam a doação
						de órgãos de seus familiares</p>
				</div>
				<div>
					<h3>+59.000</h3>
					<p>Pessoas na fila esperando uma doação</p>
				</div>
			</div>
		</section>
	)
}
