import React from 'react'
import "./style.css"

interface TitlesProps {
	title: string;
	subtitle: string;
}

export const Titles = ({ title, subtitle }: TitlesProps): JSX.Element => {
	return (
		<div className='content-titles'>
			<h1>{title}</h1>
			<p>{subtitle}</p>
		</div>
	)
}
