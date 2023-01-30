import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./Button.module.css"

interface IButton {
	title: string;
	link: string
	// icon?: React.Element;
}

export const Button = ({ title, link }: IButton) => {
	return (
		<NavLink to={link}>
			<button className={styles.button}>{title}</button>
		</NavLink>
	)
}
