const name = "Susan";
const height = 39;
const message = `${name} is ${height} inches tall`;

// makes the vars avail to tests to read tehem with require()
module.exports = {name, height, message};
