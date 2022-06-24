function validateRegister(email, username, phoneNumber) {
  const newError = {};
  if (isRequired(email)) {
    newError.email = "Email is required";
  }

  if (isRequired(username)) {
    newError.username = "Username is required";
  }

  if (isRequired(phoneNumber)) {
    newError.phoneNumber = "Phone Number is required";
  } else if (phoneNumber.length !== 10) {
    newError.phoneNumber = "Invalid Phone number format";
  }
  return newError;
}

function isRequired(value) {
  return !!!value;
}

export { validateRegister };
