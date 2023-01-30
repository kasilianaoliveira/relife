

import { CardInformation } from './CardInformation/Index';
import { Contact } from './Contact/Index';
import { Footer } from './Footer/Index';
import { HeaderComponents } from "./Header/Index";
import { Institutions } from './Institutions/Index';

export const Home = () => {
	return (
		<>
			<HeaderComponents />

			<main>
				<CardInformation />
				<Institutions />
				<Contact />
			</main>
			<Footer />
		</>
	)
}

