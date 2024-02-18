const Person = require(".");

const people = new Person('Gabriel', 17, 'Brasil')
const getAgeMonths = people.get_age_months()
console.log(getAgeMonths)