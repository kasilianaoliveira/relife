import { Box } from '@mui/material'
import { Skeleton } from "@mui/material";
import "./style.css"

export const Skeletons = () => {
	return (
		<Box className='skeleton-style'>
			<Skeleton width={"100%"} height={60} />
			<Skeleton width={"80%"} height={60} />
			<Skeleton width={"90%"} height={60} />
			<Skeleton width={"70%"} height={60} />
			<Skeleton width={"100%"} height={60} />

		</Box>
	)
}
