const buildYhteydenottoString = (data) => {
    var email = "";
    email += "Suora yhteydenotto kotisivuilta."
    email += "\nLähettäjä: " + data.name;
    email += "\nLähettäjän email: " + data.email;
    email += "\nAsia:\n" + data.details;
    return email;
}

module.exports = {buildYhteydenottoString}