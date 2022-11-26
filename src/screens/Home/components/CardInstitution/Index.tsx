import { Button } from '@mui/material';
import { Box } from '@mui/system'
import Instituicao from '../../../../assets/instituicao.png';

export const CardInstitution = () => {
	return (
		<Box className='cards-institutions'>
			<h2 className='info-title'>Conheça as instituições parceiras </h2>
			<Box className="cards-institutions-img">
				<img src={Instituicao} width={343} height={107} alt="" />
				<img src={Instituicao} width={343} height={107} alt="" />
				<img src={Instituicao} width={343} height={107} alt="" />
			</Box>
			<Box textAlign='center' marginBottom={20} marginTop={10}>
				<Button variant="outlined" size="medium" color='success'>
					Ver mais
				</Button>
			</Box>
		</Box>
	)
}
