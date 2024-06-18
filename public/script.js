function sendOTP() {
    var username = document.getElementById("username").value;
    if (username) {
        // Here, you would typically make an AJAX request to your backend to send the OTP.
        console.log("Sending OTP to username: " + username);
        document.getElementById("login-form").style.display = "none";
        document.getElementById("otp-form").style.display = "block";
        document.getElementById("message").textContent = "OTP sent to your registered mobile number.";
    } else {
        document.getElementById("message").textContent = "Please enter your username.";
    }
}

function verifyOTP() {
    var otp = document.getElementById("otp").value;
    if (otp) {
        // Here, you would typically make an AJAX request to your backend to verify the OTP.
        console.log("Verifying OTP: " + otp);
        // On success, redirect to the home page.
        window.location.href = "home.html";
    } else {
        document.getElementById("message").textContent = "Please enter the OTP.";
    }
}
