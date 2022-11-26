import { IUserData } from './types';


export function setUserLocalStorage(user: IUserData | null) {
	const t = localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage() {
	const json = localStorage.getItem("u");
	if (!json) {
		return null;
	}

	const user = JSON.parse(json);

	return user ?? null;

}
