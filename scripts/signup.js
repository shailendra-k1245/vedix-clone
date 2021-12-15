// register details
let customerData = JSON.parse(localStorage.getItem("customerData")) || [];

let register = (e) => {
	e.preventDefault();
	let firstName = document.getElementById("firstname").value;
	let lastName = document.getElementById("lastname").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;

	let customerObj = {
		firstname: firstName,
		lastname: lastName,
		email: email,
		password: password,
	};

	// registering after checking if email is already registered
	let alertMsg = document.getElementById("alertMsg");
	if (isEmailExist(email)) {
		alertMsg.textContent = "Email Already Exists";
	} else {
		customerData.push(customerObj);
		localStorage.setItem("customerData", JSON.stringify(customerData));
		alertMsg.textContent = "";
		document.querySelector("form").reset();
	}
};

// check if the email is already registered
let isEmailExist = (email) => {
	for (let i = 0; i < customerData.length; i++) {
		if (email === customerData[i].email) {
			return true;
		}
	}
};

// signup event
document.querySelector("form").addEventListener("submit", register);
