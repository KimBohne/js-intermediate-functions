// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.



/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

/* Uitwerking Opdracht 1 */
function getEmailDomain(mailAddress){
    const domainName = mailAddress.split("@");
    return domainName[1];
}

const output = getEmailDomain("t.mellink@novi.nl");
console.log(output);
console.log(getEmailDomain("a.wiersma@outlook.com"));


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

/* Uitwerking-Opdracht  2 */
function typOfEmail (mailAddress) {
    const domainName = getEmailDomain(mailAddress);
    if (domainName === "novi-education.nl") {
        return "student";
    } else if (domainName === "novi.nl") {
        return "mederwerker";
    } else {
        return "extern";
    }
}
console.log(typOfEmail("n.eeken@novi-education.nl"));
console.log(typOfEmail("t.mellink@novi.nl"));
console.log(typOfEmail("novi.nlaapjesk@outlook.com"));
console.log(typOfEmail("a.wiersma@outlook.com"));
// -------------------------------------------------------------------

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

/* Uitwerking-Opdracht 3 */
function checkEmailValidity(mailAddress){
    const checkAapStaartje = mailAddress.includes("@");
    const checkKomma = mailAddress.includes(",");
    const checkPoint = mailAddress.lastIndexOf(".");
    const checkPointIndex = checkPoint !== mailAddress.length -1;
    if (checkAapStaartje === true && checkKomma === false && checkPointIndex === true) {
        return true;
    } else {
        return false;
    }
}
console.log(checkEmailValidity("n.eekennovinl."));
console.log(checkEmailValidity("tessmellink@novi.nl"));
console.log(checkEmailValidity("n.eekenanovi.nl"));
console.log(checkEmailValidity("n.eeken@novinl."));
console.log(checkEmailValidity("tessmellink@novi,nl"));
