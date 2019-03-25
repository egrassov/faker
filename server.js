const faker = require("faker")
const fs = require("fs")
var program = require('commander');
 
program
  .version('0.1.0')
  .option('-t, --total', 'Add peppers')
  .parse(process.argv);

//console.log(program)

let output = [...new Array(+program.args[0])].map(x => ({email: faker.internet.email(), name: faker.name.findName(), card: faker.helpers.createCard()}))

console.log(output)

fs.writeFile("fake.json", JSON.stringify(output), function () {
	console.log("done!")
})


//console.log(faker.internet.email())
