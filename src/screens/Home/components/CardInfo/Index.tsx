import { Box, Link } from '@mui/material'
import Orgao from '../../../../assets/orgao.png';
import Tecido from '../../../../assets/tecido.png';

export const CardInfo = () => {
	return (
		<Box className='content-cards'>
			<h2 className='info-title'>Conheça um pouco sobre os tipos de doação mais comuns</h2>
			<Box className="cards">
				<Box className='card-01'>
					<img src={Orgao} width={500} height={268.19} alt="" />
					<button className='about'>
						<Link href='https://www.einstein.br/especialidades/transplantes/transplante-orgaos/doacao-orgaos' style={{ textDecoration: 'none' }} color="inherit">
							Saiba mais
						</Link>
					</button>
					<p className='title-card'>Órgão</p>
				</Box>

				<Box className='card-02'>
					<img src={Tecido} width={500} height={268.19} alt="" />
					<button className='about'>
						<Link href='https://www.prescrita.com.br/quais-tecidos-podem-ser-doados/' style={{ textDecoration: 'none' }} color="inherit">
							Saiba mais
						</Link>
					</button>
					<p className='title-card'>Tecido</p>
				</Box>
			</Box>
		</Box>
	)
}
