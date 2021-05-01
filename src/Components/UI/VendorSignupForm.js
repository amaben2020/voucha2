import React from "react";
import FormikControl from "./FormikControl";
import { Form, Formik } from "formik";
// import * as yup from "yup";
import Button from "@material-ui/core/Button";
import { useAuth0 } from "@auth0/auth0-react";
function VendorSignupForm() {
	// function myFunction() {
	// 	document.getElementById("form-control").style.overflow = "scroll";
	// }
	const { loginWithRedirect } = useAuth0();
	const organizationOptions = [
		{ key: "Select your organisation category", value: "" },
		{ key: "Aviation", value: "react" },
		{ key: "Banking", value: "angular" },
		{ key: "Philanthropy", value: "vue" },
	];

	// const dropDownOptions = [
	// 	{ key: "Select your organisation category", value: "" },
	// 	{ key: "Aviation", value: "react" },
	// 	{ key: "Banking", value: "angular" },
	// 	{ key: "Philanthropy", value: "vue" },
	// ];

	const countryOptions = [
		{ key: "Choose your country", value: "" },
		{ key: "Afghanistan", value: "AF" },

		{ key: "land Islands", value: "AX" },

		{ key: "Albania", value: "AL" },

		{ key: "Algeria", value: "DZ" },

		{ key: "American Samoa", value: "AS" },

		{ key: "AndorrA", value: "AD" },

		{ key: "Angola", value: "AO" },

		{ key: "Anguilla", value: "AI" },

		{ key: "Antarctica", value: "AQ" },

		{ key: "Antigua and Barbuda", value: "AG" },

		{ key: "Argentina", value: "AR" },

		{ key: "Armenia", value: "AM" },

		{ key: "Aruba", value: "AW" },

		{ key: "Australia", value: "AU" },

		{ key: "Austria", value: "AT" },

		{ key: "Azerbaijan", value: "AZ" },

		{ key: "Bahamas", value: "BS" },

		{ key: "Bahrain", value: "BH" },

		{ key: "Bangladesh", value: "BD" },

		{ key: "Barbados", value: "BB" },

		{ key: "Belarus", value: "BY" },

		{ key: "Belgium", value: "BE" },

		{ key: "Belize", value: "BZ" },

		{ key: "Benin", value: "BJ" },

		{ key: "Bermuda", value: "BM" },

		{ key: "Bhutan", value: "BT" },

		{ key: "Bolivia", value: "BO" },

		{ key: "Bosnia and Herzegovina", value: "BA" },

		{ key: "Botswana", value: "BW" },

		{ key: "Bouvet Island", value: "BV" },

		{ key: "Brazil", value: "BR" },

		{ key: "British Indian Ocean Territory", value: "IO" },

		{ key: "Brunei Darussalam", value: "BN" },

		{ key: "Bulgaria", value: "BG" },

		{ key: "Burkina Faso", value: "BF" },

		{ key: "Burundi", value: "BI" },

		{ key: "Cambodia", value: "KH" },

		{ key: "Cameroon", value: "CM" },

		{ key: "Canada", value: "CA" },

		{ key: "Cape Verde", value: "CV" },

		{ key: "Cayman Islands", value: "KY" },

		{ key: "Central African Republic", value: "CF" },

		{ key: "Chad", value: "TD" },

		{ key: "Chile", value: "CL" },

		{ key: "China", value: "CN" },

		{ key: "Christmas Island", value: "CX" },

		{ key: "Cocos (Keeling) Islands", value: "CC" },

		{ key: "Colombia", value: "CO" },

		{ key: "Comoros", value: "KM" },

		{ key: "Congo", value: "CG" },

		{ key: "Congo, The Democratic Republic of the", value: "CD" },

		{ key: "Cook Islands", value: "CK" },

		{ key: "Costa Rica", value: "CR" },

		{ key: 'Cote D"Ivoire', value: "CI" },

		{ key: "Croatia", value: "HR" },

		{ key: "Cuba", value: "CU" },

		{ key: "Cyprus", value: "CY" },

		{ key: "Czech Republic", value: "CZ" },

		{ key: "Denmark", value: "DK" },

		{ key: "Djibouti", value: "DJ" },

		{ key: "Dominica", value: "DM" },

		{ key: "Dominican Republic", value: "DO" },

		{ key: "Ecuador", value: "EC" },

		{ key: "Egypt", value: "EG" },

		{ key: "El Salvador", value: "SV" },

		{ key: "Equatorial Guinea", value: "GQ" },

		{ key: "Eritrea", value: "ER" },

		{ key: "Estonia", value: "EE" },

		{ key: "Ethiopia", value: "ET" },

		{ key: "Falkland Islands (Malvinas)", value: "FK" },

		{ key: "Faroe Islands", value: "FO" },

		{ key: "Fiji", value: "FJ" },

		{ key: "Finland", value: "FI" },

		{ key: "France", value: "FR" },

		{ key: "French Guiana", value: "GF" },

		{ key: "French Polynesia", value: "PF" },

		{ key: "French Southern Territories", value: "TF" },

		{ key: "Gabon", value: "GA" },

		{ key: "Gambia", value: "GM" },

		{ key: "Georgia", value: "GE" },

		{ key: "Germany", value: "DE" },

		{ key: "Ghana", value: "GH" },

		{ key: "Gibraltar", value: "GI" },

		{ key: "Greece", value: "GR" },

		{ key: "Greenland", value: "GL" },

		{ key: "Grenada", value: "GD" },

		{ key: "Guadeloupe", value: "GP" },

		{ key: "Guam", value: "GU" },

		{ key: "Guatemala", value: "GT" },

		{ key: "Guernsey", value: "GG" },

		{ key: "Guinea", value: "GN" },

		{ key: "Guinea-Bissau", value: "GW" },

		{ key: "Guyana", value: "GY" },

		{ key: "Haiti", value: "HT" },

		{ key: "Heard Island and Mcdonald Islands", value: "HM" },

		{ key: "Holy See (Vatican City State)", value: "VA" },

		{ key: "Honduras", value: "HN" },

		{ key: "Hong Kong", value: "HK" },

		{ key: "Hungary", value: "HU" },

		{ key: "Iceland", value: "IS" },

		{ key: "India", value: "IN" },

		{ key: "Indonesia", value: "ID" },

		{ key: "Iran, Islamic Republic Of", value: "IR" },

		{ key: "Iraq", value: "IQ" },

		{ key: "Ireland", value: "IE" },

		{ key: "Isle of Man", value: "IM" },

		{ key: "Israel", value: "IL" },

		{ key: "Italy", value: "IT" },

		{ key: "Jamaica", value: "JM" },

		{ key: "Japan", value: "JP" },

		{ key: "Jersey", value: "JE" },

		{ key: "Jordan", value: "JO" },

		{ key: "Kazakhstan", value: "KZ" },

		{ key: "Kenya", value: "KE" },

		{ key: "Kiribati", value: "KI" },

		{ key: 'Korea, Democratic People"S Republic of', value: "KP" },

		{ key: "Korea, Republic of", value: "KR" },

		{ key: "Kuwait", value: "KW" },

		{ key: "Kyrgyzstan", value: "KG" },

		{ key: 'Lao People"S Democratic Republic', value: "LA" },

		{ key: "Latvia", value: "LV" },

		{ key: "Lebanon", value: "LB" },

		{ key: "Lesotho", value: "LS" },

		{ key: "Liberia", value: "LR" },

		{ key: "Libyan Arab Jamahiriya", value: "LY" },

		{ key: "Liechtenstein", value: "LI" },

		{ key: "Lithuania", value: "LT" },

		{ key: "Luxembourg", value: "LU" },

		{ key: "Macao", value: "MO" },

		{ key: "Macedonia, The Former Yugoslav Republic of", value: "MK" },

		{ key: "Madagascar", value: "MG" },

		{ key: "Malawi", value: "MW" },

		{ key: "Malaysia", value: "MY" },

		{ key: "Maldives", value: "MV" },

		{ key: "Mali", value: "ML" },

		{ key: "Malta", value: "MT" },

		{ key: "Marshall Islands", value: "MH" },

		{ key: "Martinique", value: "MQ" },

		{ key: "Mauritania", value: "MR" },

		{ key: "Mauritius", value: "MU" },

		{ key: "Mayotte", value: "YT" },

		{ key: "Mexico", value: "MX" },

		{ key: "Micronesia, Federated States of", value: "FM" },

		{ key: "Moldova, Republic of", value: "MD" },

		{ key: "Monaco", value: "MC" },

		{ key: "Mongolia", value: "MN" },

		{ key: "Montenegro", value: "ME" },

		{ key: "Montserrat", value: "MS" },

		{ key: "Morocco", value: "MA" },

		{ key: "Mozambique", value: "MZ" },

		{ key: "Myanmar", value: "MM" },

		{ key: "Namibia", value: "NA" },

		{ key: "Nauru", value: "NR" },

		{ key: "Nepal", value: "NP" },

		{ key: "Netherlands", value: "NL" },

		{ key: "Netherlands Antilles", value: "AN" },

		{ key: "New Caledonia", value: "NC" },

		{ key: "New Zealand", value: "NZ" },

		{ key: "Nicaragua", value: "NI" },

		{ key: "Niger", value: "NE" },

		{ key: "Nigeria", value: "NG" },

		{ key: "Niue", value: "NU" },

		{ key: "Norfolk Island", value: "NF" },

		{ key: "Northern Mariana Islands", value: "MP" },

		{ key: "Norway", value: "NO" },

		{ key: "Oman", value: "OM" },

		{ key: "Pakistan", value: "PK" },

		{ key: "Palau", value: "PW" },

		{ key: "Palestinian Territory, Occupied", value: "PS" },

		{ key: "Panama", value: "PA" },

		{ key: "Papua New Guinea", value: "PG" },

		{ key: "Paraguay", value: "PY" },

		{ key: "Peru", value: "PE" },

		{ key: "Philippines", value: "PH" },

		{ key: "Pitcairn", value: "PN" },

		{ key: "Poland", value: "PL" },

		{ key: "Portugal", value: "PT" },

		{ key: "Puerto Rico", value: "PR" },

		{ key: "Qatar", value: "QA" },

		{ key: "Reunion", value: "RE" },

		{ key: "Romania", value: "RO" },

		{ key: "Russian Federation", value: "RU" },

		{ key: "RWANDA", value: "RW" },

		{ key: "Saint Helena", value: "SH" },

		{ key: "Saint Kitts and Nevis", value: "KN" },

		{ key: "Saint Lucia", value: "LC" },

		{ key: "Saint Pierre and Miquelon", value: "PM" },

		{ key: "Saint Vincent and the Grenadines", value: "VC" },

		{ key: "Samoa", value: "WS" },

		{ key: "San Marino", value: "SM" },

		{ key: "Sao Tome and Principe", value: "ST" },

		{ key: "Saudi Arabia", value: "SA" },

		{ key: "Senegal", value: "SN" },

		{ key: "Serbia", value: "RS" },

		{ key: "Seychelles", value: "SC" },

		{ key: "Sierra Leone", value: "SL" },

		{ key: "Singapore", value: "SG" },

		{ key: "Slovakia", value: "SK" },

		{ key: "Slovenia", value: "SI" },

		{ key: "Solomon Islands", value: "SB" },

		{ key: "Somalia", value: "SO" },

		{ key: "South Africa", value: "ZA" },

		{ key: "South Georgia and the South Sandwich Islands", value: "GS" },

		{ key: "Spain", value: "ES" },

		{ key: "Sri Lanka", value: "LK" },

		{ key: "Sudan", value: "SD" },

		{ key: "Suriname", value: "SR" },

		{ key: "Svalbard and Jan Mayen", value: "SJ" },

		{ key: "Swaziland", value: "SZ" },

		{ key: "Sweden", value: "SE" },

		{ key: "Switzerland", value: "CH" },

		{ key: "Syrian Arab Republic", value: "SY" },
		{ key: "Taiwan, Province of China", value: "TW" },

		{ key: "Tajikistan", value: "TJ" },

		{ key: "Tanzania, United Republic of", value: "TZ" },

		{ key: "Thailand", value: "TH" },

		{ key: "Timor-Leste", value: "TL" },

		{ key: "Togo", value: "TG" },
		{ key: "Tokelau", value: "TK" },

		{ key: "Tonga", value: "TO" },

		{ key: "Trinidad and Tobago", value: "TT" },

		{ key: "Tunisia", value: "TN" },

		{ key: "Turkey", value: "TR" },

		{ key: "Turkmenistan", value: "TM" },

		{ key: "Turks and Caicos Islands", value: "TC" },

		{ key: "Tuvalu", value: "TV" },

		{ key: "Uganda", value: "UG" },

		{ key: "Ukraine", value: "UA" },

		{ key: "United Arab Emirates", value: "AE" },

		{ key: "United Kingdom", value: "GB" },

		{ key: "United States", value: "US" },

		{ key: "United States Minor Outlying Islands", value: "UM" },

		{ key: "Uruguay", value: "UY" },

		{ key: "Uzbekistan", value: "UZ" },

		{ key: "Vanuatu", value: "VU" },

		{ key: "Venezuela", value: "VE" },

		{ key: "Viet Nam", value: "VN" },

		{ key: "Virgin Islands, British", value: "VG" },

		{ key: "Virgin Islands, U.S.", value: "VI" },

		{ key: "Wallis and Futuna", value: "WF" },

		{ key: "Western Sahara", value: "EH" },

		{ key: "Yemen", value: "YE" },

		{ key: "Zambia", value: "ZM" },

		{ key: "Zimbabwe", value: "ZW" },
	];
	const individualOptions = [
		{ key: "Organisation", value: "org" },
		{ key: "Individual", value: "ind" },
	];

	const organizationCategory = [
		{ key: "Philanthropy", value: "a" },
		{ key: "Faith-based organisation", value: "b" },
		{ key: "Government/ Public sector", value: "c" },
		{ key: "International development", value: "d" },
		{ key: "Social enterprise", value: "e" },
		{ key: "Community-based organisation", value: "f" },
		{ key: "Others", value: "g" },
	];

	const checkboxOptions = [
		{
			key: "I agree to the Terms of Service",
			value:
				"I totally agree to the Terms and conditions of this service. My intention is to touch lives and empower communities",
		},
	];

	const initialValues = {
		email: "",
		course: "",
		TermsOfService: [],
		organization: "",
		individualOpt: "",
		country: "",
		password: "",
	};

	const onSubmit = (values) => {
		console.log("FORM DATA", values);
	};

	// const validationSchema = yup.object({
	// 	email: yup.string().email("invalid email format"),
	// 	name: yup.string(),
	// 	number: yup.string(),
	// 	course: yup.string().required("Required"),
	// });

	return (
		<div className="form-control">
			<Formik
				// validationSchema={validationSchema}
				initialValues={initialValues}
				onSubmit={onSubmit}
			>
				{(formik) => {
					return (
						<Form>
							<FormikControl
								control="select"
								options={individualOptions}
								label="Choose Individual or Organisation"
								name="org"
							/>
							<FormikControl
								control="select"
								options={organizationOptions}
								label=" Organisation Category"
								name="course"
							/>

							<FormikControl
								control="input"
								type="text"
								label="Name of organization"
								name="name"
								placeholder="IN CAPITALS"
							/>
							<FormikControl
								control="select"
								options={organizationCategory}
								label="If organisation, Type of organisation"
								name="course"
							/>
							<FormikControl
								control="input"
								type="email"
								label="Email"
								name="email"
							/>
							<FormikControl
								control="input"
								type="text"
								placeholder="Please enter your phone number"
								label="Phone Number"
								name="number"
							/>

							<FormikControl
								control="select"
								options={countryOptions}
								label="Choose your country"
								name="course"
							/>
							<FormikControl
								control="chakrainput"
								type="password"
								label="Password"
								name="password"
							/>
							<FormikControl
								control="checkbox"
								options={checkboxOptions}
								label=""
								name="TermsOfService"
							/>

							<Button
								style={{
									cursor: "pointer",
									boxShadow: "1px 1px 5px rgba(0,0,0, 0.75)",
									border: "1px solid #fff",
									borderRadius: "1rem",
									font: "inherit",
									background: "#CE338C",
									color: "#fff",
									padding: "0.7em",
								}}
								type="submit"
								onClick={() => loginWithRedirect()}
								disabled={!formik.isValid}
							>
								Submit
							</Button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}

export default VendorSignupForm;