import React, { useReducer } from "react";
import donorReducer from "../DonorAuthentication/donorReducer";
import DonorAuthContext from "./DonorAuthContext";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import {
	REGISTER_SUCCESS,
	AUTH_ERROR,
	REGISTER_FAIL,
	USER_LOADED,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
} from "../types/Types";

const DonorAuthState = (props) => {
	const initialState = {
		token: localStorage.getItem("token"),
		isAuthenticated: null,
		loading: true,
		error: null,
		user: null,
	};

	const [state, dispatch] = useReducer(donorReducer, initialState);

	//register user
	const register = async (formData) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		try {
			const res = await axios.post("/api/donorUsers", formData, config);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});
			loadUser();
		} catch (err) {
			dispatch({
				type: REGISTER_FAIL,
				payload: err.response.data.msg,
			});
		}
	};

	//clear errors
	const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

	//load Load users
	const loadUser = async () => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}

		try {
			const res = await axios.get("/api/auth");
			dispatch({ type: USER_LOADED, payload: res.data });
		} catch (err) {
			dispatch({ type: AUTH_ERROR });
		}
	};
	//login user

	const login = async (formData) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		try {
			const res = await axios.post("/api/auth", formData, config);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});
			loadUser();
		} catch (err) {
			dispatch({
				type: LOGIN_FAIL,
				payload: err.response.data.msg,
			});
		}
	};
	//logout
	const logout = () => dispatch({ type: LOGOUT });
	return (
		<DonorAuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error,
				register,
				loadUser,
				login,
				logout,
				clearErrors,
			}}
		>
			{props.children}
		</DonorAuthContext.Provider>
	);
};

export default DonorAuthState;
