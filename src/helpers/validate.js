function validateRegister(email, username, phoneNumber) {
  const newError = {};
  if (!email) {
    newError.email = "Email is required";
  }

  if (!username) {
    newError.username = "Username is required";
  }

  if (!phoneNumber) {
    newError.phoneNumber = "Phone Number is required";
  } else if (phoneNumber.length !== 10) {
    newError.phoneNumber = "Invalid Phone number format";
  }
  return newError;
}

export { validateRegister };
