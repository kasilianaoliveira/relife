import { Box } from '@mui/system'
import Banneer from '../../../../assets/fundo-nov.png';

export const Banner = () => {
	return (
		<Box className="image-banner">
			<Box className="image-banner-background">
				<img src={Banneer} alt="Banner" />
				{/* <p>dliashdl</p> */}
			</Box>
		</Box>
	)
}
