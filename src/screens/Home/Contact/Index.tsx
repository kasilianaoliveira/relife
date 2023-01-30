import React from 'react'
import atendimento from '../../../assets/Foto-contact.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import styles from "./Contact.module.css"

export const Contact = () => {
	return (
		<section className={styles.contact} id="contato">
			<div>
				<h2>Caso tenha interesse em se tornar uma instituição parceira, entre em contato!</h2>
				<div className={styles.contentContact}>
					<span>
						<MailOutlineIcon className={styles.icon} />
						<p>contato@relife.com</p>
					</span>
					<span>
						<CallIcon className={styles.icon} />
						<p>	3441-0000</p>
					</span>
					<span>
						<WhatsAppIcon className={styles.icon} />
						<p>(00) 90000-0000</p>
					</span>
				</div>
			</div>
			<img src={atendimento} alt="" />
		</section>
	)
}
