import { Box } from '@mui/material'

export const Information = () => {
	return (
		<Box className='info-numbers'>
			<h2 className='info-title'>
				Doar órgãos ajuda quem sobrevive, e torna a vida de quem partiu mais significativa ainda
			</h2>
			<Box className="informes">
				<Box className="informes-card">
					<h2>+3.200 mil</h2>
					<p>Doadores absolutos em 2021 no Brasil</p>
				</Box>
				<Box className="informes-card">
					<h2>+43%</h2>
					<p>De famílias recusam a doação de órgãos de seus familiares</p>
				</Box>
				<Box className="informes-card">
					<h2>+59 mil</h2>
					<p>Pessoa na fila esperando uma doação</p>
				</Box>
			</Box>
		</Box>
	)
}
