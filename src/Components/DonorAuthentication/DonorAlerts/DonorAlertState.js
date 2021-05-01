import React, { useReducer } from "react";
import alertReducer from "../DonorAlerts/alertReducer";
import DonorAlertContext from "./DonorAlertContext";
import uuid from "uuid/v4";
import { SET_ALERT, REMOVE_ALERT } from "../../types/Types";

const DonorAlertState = (props) => {
	const initialState = [];

	const [state, dispatch] = useReducer(alertReducer, initialState);

	//set alert
	const setAlert = (msg, type, timeout = 5000) => {
		const id = uuid.v4();
		dispatch({
			type: SET_ALERT,
			payload: { msg, type, id },
		});
		setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
	};

	return (
		<DonorAlertContext.Provider
			value={{
				alerts: state,
				setAlert,
			}}
		>
			{props.children}
		</DonorAlertContext.Provider>
	);
};

export default DonorAlertState;
