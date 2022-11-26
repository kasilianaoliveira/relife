import { Menu } from './components/menu/index';
import { Footer } from './components/Footer/Index';

import "./style.css"
import { Information } from './components/Informations/Index';
import { CardInfo } from './components/CardInfo/Index';
import { Banner } from './components/Banner/Index';
import { CardInstitution } from './components/CardInstitution/Index';

export const Home = () => {
	return (
		<>
			<Menu />
			<main className="content-principal">
				<Banner />
				<Information />
				<CardInfo />
				<CardInstitution />
			</main>
			<Footer />
		</>
	)
}

