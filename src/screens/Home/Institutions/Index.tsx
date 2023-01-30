import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import styles from "./Institutions.module.css"
import { Button } from '../components/Button/Index';

export const Institutions = () => {
	return (
		<section className={styles.container} id='instituicoes-parceiras'>
			<div className={styles.title}>
				<h3>Instituições parceiras</h3>
				<h2>Conheça as instituições parceiras do nosso site</h2>
			</div>
			<div className={styles.cards}>
				<div className={styles.card}>
					<AccountBalanceIcon className={styles.icon} />
					<h4>Zego</h4>
					<span>Fortaleza-Ce, rua x, numero 4</span>
					<span>CNPJ: 00.000.000/0000-00</span>
				</div>
				<div className={styles.card}>
					<AccountBalanceIcon className={styles.icon} />
					<h4>Zego</h4>
					<span>Fortaleza-Ce, rua x, numero 4</span>
					<span>CNPJ: 00.000.000/0000-00</span>
				</div>
				<div className={styles.card}>
					<AccountBalanceIcon className={styles.icon} />
					<h4>Zego</h4>
					<span>Fortaleza-Ce, rua x, numero 4</span>
					<span>CNPJ: 00.000.000/0000-00</span>
				</div>
				<div className={styles.card}>
					<AccountBalanceIcon className={styles.icon} />
					<h4>Zego</h4>
					<span>Fortaleza-Ce, rua x, numero 4</span>
					<span>CNPJ: 00.000.000/0000-00</span>
				</div>
				<div className={styles.card}>
					<AccountBalanceIcon className={styles.icon} />
					<h4>Zego</h4>
					<span>Fortaleza-Ce, rua x, numero 4</span>
					<span>CNPJ: 00.000.000/0000-00</span>
				</div>
				<div className={styles.card}>
					<AccountBalanceIcon className={styles.icon} />
					<h4>Zego</h4>
					<span>Fortaleza-Ce, rua x, numero 4</span>
					<span>CNPJ: 00.000.000/0000-00</span>
				</div>
			</div>
			<div className={styles.button}>
				<Button title='Ver mais' link='instituicoes' />
			</div>
		</section>
	)
}
