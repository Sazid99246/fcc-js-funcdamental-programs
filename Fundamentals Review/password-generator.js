function generatePassword(passwordLength) {
    const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const charIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[charIndex];
    }
    return password;
}

const password = generatePassword(8);
console.log(`Generated password: ${password}`);
