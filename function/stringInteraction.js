module.exports.upperFirstCase = (string) => {
    return string.trim().charAt(0).toUpperCase() + string.slice(1);
}

module.exports.protectUserEmail = (email, pattern, totalReplacedChar) => {
    return pattern.repeat(totalReplacedChar) + email.slice(totalReplacedChar, email.length);
}  