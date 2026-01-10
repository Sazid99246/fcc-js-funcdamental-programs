function maskEmail(email) {
    const parts = email.split("@");
    const userName = parts[0];
    const domainName = parts[1];
    const starCount = userName.length - 2;
    let newUserName = parts[0][0];
    for (let i = 1; i <= starCount; i++) {
        newUserName += "*";
    }
    newUserName += parts[0][userName.length - 1];

    const newEmail = newUserName + "@" + domainName;
    return newEmail;
}

const email = "sheikhmdsazidulislam@gmail.com";
console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("freecodecamp@example.com"));
