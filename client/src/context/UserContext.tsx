import React, { createContext, useState, useEffect } from "react";
import { message } from "antd";
import { useHistory } from "react-router-dom";

type Context = {
	isAuth: string | null;
	loggedUser: boolean;
};

export const UserContext = createContext<Context>({
	isAuth: "",
	loggedUser: false,
});

export const UserProvider = props => {
	const isAuth: string | null = JSON.stringify(
		localStorage.getItem("appointments_management_login_token")
	);

	let history = useHistory();
	const [loggedUser, setLoggedUser] = useState(false);

	useEffect(() => {
		if (isAuth) {
			setLoggedUser(true);
		}
	}, []);

	const isLogged = {
		isAuth: isAuth,
		loggedUser: loggedUser,
	};

	return (
		<UserContext.Provider value={{ isAuth, loggedUser }}>
			{props.children}
		</UserContext.Provider>
	);
};
