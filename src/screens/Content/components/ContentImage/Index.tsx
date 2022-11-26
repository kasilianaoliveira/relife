import React from 'react'
import Medico from "../../../../assets/medico.png"
import "./style.css"
export const ContentImage = () => {
	return (
		<div className='content-img'>

			<div className='content-title-img'>
				<h1 className='title-style-main'>Doe órgãos,</h1>
				<h1 className='title-style'>Doe esperança.</h1>
			</div>
			<img src={Medico} alt="" className='img-medico' />
		</div>
	)
}
