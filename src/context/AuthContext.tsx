import {
	createContext,
	useEffect,
	useState,
} from "react";
import jwt_decode from 'jwt-decode'

import { api } from "../services/api";
import { IAuthProvider, IContext, ITokenInfo, IUserData } from "./types";
import { getUserLocalStorage, setUserLocalStorage } from "./util";
import { User } from "../Types/User";
import { Institution } from "../Types/Institution";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {


	const [user, setUser] = useState<IUserData | null>(null);
	const [resultUser, setResultUser] = useState<Array<User>>([]);
	// const [loading, setLoading] = useState<boolean>();
	const [tokenContext, setTokenContext] = useState('')
	const [userRole, setUserRole] = useState<string>('')
	const [loading, setLoading] = useState<boolean>();

	const [userCPF, setUserCPF] = useState('')
	const [selectValue, setSelectValue] = useState("");

	useEffect(() => {
		const user = getUserLocalStorage();
		if (user) {
			setTokenContext(user.tokenUser)
			setUser(user)
			api.defaults.headers.authorization = `Bearer ${user.tokenUser}`;
		}
	}, [])

	const handleClick = (data: string) => setUserRole(data)

	const authenticate = async (email: string, password: string) => {
		try {
			const response = await api.post("/login", {
				email,
				password,
			});


			const tokenCompleted = response.data
			const decode = jwt_decode<ITokenInfo>(tokenCompleted);

			const payload = { tokenUser: tokenCompleted, id: decode.id, email: decode.email, role: decode.role };
			setTokenContext(tokenCompleted)
			setUser(payload)
			setUserLocalStorage(payload)


			api.defaults.headers.authorization = `Bearer ${tokenCompleted}`;

			return response.data;

		} catch (error) {
			return null;
		}
	}

	const logout = () => {
		setUser(null)
		setUserLocalStorage(null)
	}

	const getUsers = async () => {
		const response = await api.get("/users")
		setResultUser(response.data)
		setLoading(true)
	};


	useEffect(() => {
		getUsers()
	}, [])


	const [institutionResult, setInstitutionResult] = useState<Array<Institution>>()





	// eslint-disable-next-line react-hooks/exhaustive-deps
	const getInstitutions = async () => {
		const response = await api.get("/institutions")

		setInstitutionResult(response.data)
	};

	console.log("inst", institutionResult)
	useEffect(() => {
		getInstitutions()
	}, [])

	return (
		<AuthContext.Provider value={{ ...user, tokenContext, authenticate, logout, userRole, setUserRole, handleClick, setUserLocalStorage, institutionResult, setInstitutionResult, setResultUser, resultUser, loading, setLoading, setUserCPF, userCPF, setSelectValue, selectValue }}>
			{children}
		</AuthContext.Provider>
	);
};
