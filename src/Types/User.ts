import { Organs } from "./Organs";


export type User = {
	user_id: string;
	role: string;
	full_name: string;
	sex?: string;
	cpf?: string;
	phone?: string;
	email: string;
	isActive?: boolean;
	mother_name?: string;
	blood_type?: string;
	password: string;

	passwordConfirmation?: string;

	zip_code: string;
	country: string;
	uf: string;
	city: string;
	district: string;
	street: string;
	number: string;
	complement: string;

	institution_id?: string;

	organs?: {
		organ_type: string;
		description: string;
	}

}
