// login details
let customerData = JSON.parse(localStorage.getItem("customerData"));

let login = (e) => {
	e.preventDefault();

	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;

	let customerObj = {
		email: email,
		password: password,
	};

	// before login checking email and password
	let alertMsg = document.getElementById("alertMsg");
	if (checkLoginDetails(customerObj.email, customerObj.password)) {
		alertMsg.textContent = "";
		document.querySelector("form").reset();
		console.log("Login Successfully");
	} else {
		alertMsg.textContent = "Invalid Email Or Password";
	}
};

// checking email and password are valid or not
let checkLoginDetails = (email, password) => {
	for (let i = 0; i < customerData.length; i++) {
		if (
			email === customerData[i].email &&
			password === customerData[i].password
		) {
			return true;
		}
	}
};

//login event
document.querySelector("form").addEventListener("submit", login);
