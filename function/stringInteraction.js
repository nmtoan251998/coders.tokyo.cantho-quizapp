module.exports.upperFirstCase = (string) => {
    return string.trim().charAt(0).toUpperCase() + string.slice(1);
}

module.exports.protectString = (email, pattern, totalReplacedChar = 3) => {
    return pattern.repeat(totalReplacedChar) + email.slice(totalReplacedChar, email.length);
}  