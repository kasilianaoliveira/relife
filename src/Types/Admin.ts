

export type Admin = {
	admin_id: string;
	role: string;
	email: string;
	phone: string;
	password: string;
	isActive?: boolean;
	passwordConfirmation: string;
}
