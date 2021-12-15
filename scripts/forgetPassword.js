// retrieving the customer data
let customerData = JSON.parse(localStorage.getItem("customerData"));

// checking if the email exists
let emailExists = (e) => {
	e.preventDefault();
	let email = document.getElementById("email").value;

	let flag = false;
	for (let i = 0; i < customerData.length; i++) {
		if (email === customerData[i].email) {
			flag = true;
			break;
		}
	}

	let alertMsg = document.getElementById("alertMsg");
	if (flag) {
		alertMsg.textContent = "";
		localStorage.setItem("forgetPasswordEmailId", JSON.stringify(email));
		window.location.href = "resetPassword.html";
	} else {
		// alerting if email does not exist
		alertMsg.textContent = "Invaild Email ID";
	}
};

// submit email event
document.querySelector("form").addEventListener("submit", emailExists);
