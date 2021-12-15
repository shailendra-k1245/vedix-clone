// retrieving all customer data
let customerData = JSON.parse(localStorage.getItem("customerData")) || [];

// retrieving the required email id for changing the password
let forgetPasswordEmailId = JSON.parse(
	localStorage.getItem("forgetPasswordEmailId")
);

// resetting the password
let resetPassword = (e) => {
	e.preventDefault();
	let newPassword = document.getElementById("newPassword").value;
	let confirmPassword = document.getElementById("confirmPassword").value;

	let alertMsg = document.getElementById("alertMsg");
	if (newPassword !== confirmPassword) {
		// alerting if the new password and confirm password mismatch
		alertMsg.textContent = "Password Mismatch";
	} else {
		alertMsg.textContent = "";
		// checking the email and storing the new password
		for (let i = 0; i < customerData.length; i++) {
			if (forgetPasswordEmailId === customerData[i].email) {
				customerData[i].password = newPassword;
				localStorage.setItem("customerData", JSON.stringify(customerData));
				// after resetting going back to login page
				window.location.href = "login.html";
				break;
			}
		}
	}
};

// reset password event
document.querySelector("form").addEventListener("submit", resetPassword);
