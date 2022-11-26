import { Institution } from "../Types/Institution";
import { User } from "../Types/User";

export interface ITokenInfo {
	id: string;
	exp: number;
	iat: number;
	role: string;
	email: string;
}

export interface TokenState {
	token: string;
}


export interface IUserData {
	id?: string;
	email?: string;
	tokenResult?: string;
	role?: string;
}


export interface IContext extends IUserData {
	tokenContext: string;
	authenticate(email: string, password: string): Promise<void>;
	logout(): void;
	userRole: string;
	setUserRole: React.Dispatch<React.SetStateAction<string>>;
	handleClick: (data: string) => void;
	setUserLocalStorage: (user: IUserData | null) => void;
	resultUser: User[] | undefined;
	setResultUser: React.Dispatch<React.SetStateAction<User[]>>;
	loading: boolean | undefined;
	setLoading: React.Dispatch<React.SetStateAction<boolean | undefined>>;
	institutionResult: Institution[] | undefined;
	setInstitutionResult: React.Dispatch<React.SetStateAction<Institution[] | undefined>>;
	userCPF: string;
	setUserCPF: React.Dispatch<React.SetStateAction<string>>;
	setSelectValue: React.Dispatch<React.SetStateAction<string>>;
	selectValue: string;
	// userLogged(): boolean;
}

export interface IAuthProvider {
	children: JSX.Element;
}
