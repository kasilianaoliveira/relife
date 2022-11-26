

export type Institution = {
	institution_id: string;
	institution_name: string;
	responsible_name: string;
	role: string;
	cnpj: string;
	email: string;
	phone: string;
	password: string;
	passwordConfirmation: string;
	isActive?: boolean
	avatar?: string;

	address_id: string;
	zip_code: string;
	country: string;
	uf: string;
	city: string;
	district: string;
	street: string;
	number: string;
	complement: string;

}
