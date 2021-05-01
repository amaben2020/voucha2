import React, { useContext } from "react";
import DonorAlertContext from "../DonorAlerts/DonorAlertContext";
import "./alert.css";
const DonorAlert = () => {
	const alertContext = useContext(DonorAlertContext);
	return (
		alertContext.alerts.length > 0 &&
		alertContext.alerts.map((alert) => (
			<div key={alert.id} className={`alert alert-${alert.type}`}>
				<i className="fas fa-info-circle" />
				{alert.msg} {/**from backend error message */}
			</div>
		))
	);
};

export default DonorAlert;
