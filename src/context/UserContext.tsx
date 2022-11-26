import { createContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { User } from '../Types/User';
import { useAuth } from './useAuth';


type UserContextProps = {
	children: ReactNode;
};

type UserContextType = {
	// user: User[];
	// setUsers: (newState: User[]) => void;
	// selectedUser: number
	// setSelectedUser: React.Dispatch<React.SetStateAction<number>>
	// updateInstitutionUser: (data: User) => Promise<void>
	// verificarCampos: () => Promise<void>
	// message: string
	// setMessage: React.Dispatch<React.SetStateAction<string>>
	// email: string
	// setEmail: React.Dispatch<React.SetStateAction<string>>
	// cpf: string
	// setCPF: React.Dispatch<React.SetStateAction<string>>
	// open: boolean
	// setOpen: React.Dispatch<React.SetStateAction<boolean>>
	// createUser: (data: User) => Promise<void>
	// updateUser: (data: User) => Promise<void>
	// deleteUser: () => Promise<void>



	// isOpenModal: boolean;
	// setIsOpenModal: (newState: boolean) => void;
	// selectedUser: number;
	// setSelectedUser: (newState: number) => void;
	// users: User[];
	// setUsers: (newState: User[]) => void;
	// setUserFormDefaultValues: (newState: User) => void;
	// setFilter: (newState: string) => void;
	// updateUser: (data: User) => void;
	// deleteUser: () => void;
};

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProps) => {
	const [selectedUser, setSelectedUser] = useState(-1);
	const [users, setUsers] = useState<User[]>([]);
	const [filter, setFilter] = useState('');

	const [message, setMessage] = useState("");
	const [email, setEmail] = useState("");
	const [cpf, setCPF] = useState("");
	const [phone, setPhone] = useState("");

	const [open, setOpen] = useState(false);

	// const [userFormDefaultValues, setUserFormDefaultValues] = useState<User>({});

	// const { mutate } = useApi('users');
	const navigate = useNavigate()
	const auth = useAuth()

	const verificarCampos = async () => {
		const response = await api.get("/users");
		const data = response.data
		// eslint-disable-next-line array-callback-return
		data.map((user: User) => {
			if (user.email === email) {
				setMessage("Email já cadastrado, tente outro!")

			}

			if (user.cpf === cpf) {
				setMessage("CPF já cadastrado, tente outro!")
			}

			if (user.phone === phone) {
				setMessage("Telefone já cadastrado, tente outro!")
			}
		})
	}

	const createUser = async (data: User) => {

		const user = {
			role: auth.userRole,
			full_name: data.full_name,
			sex: data.sex,
			cpf: data.cpf,
			phone: data.phone,
			email: data.email,
			mother_name: data.mother_name,
			password: data.password,

			zip_code: data.zip_code,
			country: data.country,
			uf: data.uf,
			city: data.city,
			district: data.district,
			street: data.street,
			number: data.number,
			complement: data.complement,
		}

		try {
			await api.post("/users", user)
			navigate("/dashboard/admin")

		} catch (error) {
			verificarCampos()
			setOpen(true)
		}
	}


	const updateUser = async (data: User) => {

		const user = {
			role: data.role,
			full_name: data.full_name,
			sex: data.sex,
			cpf: data.cpf,
			phone: data.phone,
			email: data.email,
			mother_name: data.mother_name,
			password: data.password,

			zip_code: data.zip_code,
			country: data.country,
			uf: data.uf,
			city: data.city,
			district: data.district,
			street: data.street,
			number: data.number,
			complement: data.complement,
		}

		try {
			await api.put(`/users/${selectedUser}`, user)

			if (data.role === "DONOR") {
				navigate("/dashboard/doador")
			} else {
				navigate("/dashboard/receptor")
			}
			// navigate("/dashboard/")

		} catch (error) {
			verificarCampos()
			setOpen(true)
		}
	}

	const updateInstitutionUser = async (data: User) => {

		const user = {
			bloodType: data.blood_type,
			institution: data.institution_id
		}


		await api.put(`/users/${selectedUser}`, user)

		navigate("/dashboard/instituicao")

	}


	const deleteUser = async () => {
		await api.delete(`/users/${selectedUser}`);
		auth.setUserLocalStorage(null)

	};

	return (
		<UserContext.Provider
			value={{
				// selectedUser,
				// setSelectedUser,
				// updateInstitutionUser,
				// verificarCampos,
				// message,
				// setMessage,
				// email,
				// setEmail,
				// cpf,
				// setCPF,
				// open,
				// setOpen,
				// createUser,
				// updateUser,
				// deleteUser

			}}
		>
			{children}
			{/* {isOpenModal && <UserModal initialValues={userFormDefaultValues} />} */}
		</UserContext.Provider>
	);
};
