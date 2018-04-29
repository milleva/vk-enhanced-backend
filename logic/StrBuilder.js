const buildYhteydenottoString = (data) => {
    var email = "";
    email += "Suora yhteydenotto kotisivuilta."
    email += "\nLähettäjä: " + data.name;
    email += "\nLähettäjän email: " + data.email;
    email += "\nAsia:\n" + data.details;
    return email;
}

const buildJasenHakemusString = (data) => {
    var email = "Uusi jäsenhakemus tullut:\n";
    email += "\nEtunimi: " + data.firstname;
    email += "\nSukunimi: " + data.lastname;
    email += "\nOsoite: " + data.address;
    email += "\nSyntymäaika: " + data.birthday;
    email += "\nEmail: " + data.email;
    email += "\nPuh: " + data.phone;
    email += "\nVanhemman puh: " + data.parentphone;
    email += "\nMuuta: " + data.details;
    return email;
}

module.exports = {buildYhteydenottoString, buildJasenHakemusString}