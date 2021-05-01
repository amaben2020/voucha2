import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import donorAuthContext from "../DonorAuthentication/DonorAuthContext";
const PrivateRoute = ({ component: Component, ...rest }) => {
	const authContext = useContext(donorAuthContext);
	const { isAuthenticated, loading } = authContext;
	return (
		<Route
			{...rest}
			render={(props) =>
				!isAuthenticated && !loading ? (
					<Redirect to="/donorSignIn" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

export default PrivateRoute;
