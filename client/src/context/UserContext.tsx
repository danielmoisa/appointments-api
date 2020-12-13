import React, { createContext, useState, useEffect } from "react";


export type User = {  
	loggedUser: boolean,
	setLoggedUser?: any
};  

export const UserContext = createContext<User>({
	loggedUser: false
});


export const UserProvider = props => {
	const isAuth = localStorage.getItem("appointments_management_login_token")
	
	const [loggedUser, setLoggedUser] = useState(false);

	useEffect(() => {
		if(isAuth) {
			setLoggedUser(true)
		}
	}, [setLoggedUser])

    const value = { loggedUser, setLoggedUser}

	return (
		<UserContext.Provider value={value} >
			{props.children}
		</UserContext.Provider>
	);
};

