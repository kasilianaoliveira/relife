import React, { useContext } from 'react'
import "./style.css"
// import { RegisterContextProvider, RegisterContext } from '../../context/Register/RegisterContext';
import { ContentImage } from './components/ContentImage/Index';
import { Link } from 'react-router-dom';


export const Content = () => {
	return (
		<div className='container'>
			{/* <RegisterContextProvider> */}
			<ContentImage />
			<Link to="/" className='link-home'>
				<span>
					Voltar para o início
				</span>
			</Link>
			{/* </RegisterContextProvider> */}
		</div>
	)
}
