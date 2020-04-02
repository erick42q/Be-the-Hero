const crypto = require("crypto");

function geterateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}

module.exports = geterateUniqueId