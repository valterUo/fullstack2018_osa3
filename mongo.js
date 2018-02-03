const mongoose = require('mongoose')

// korvaa url oman tietokantasi urlilla!
const url = 'mongodb://hirvi:hirvio@ds121118.mlab.com:21118/fullstack2018'

mongoose.connect(url)
mongoose.Promise = global.Promise

const Person = mongoose.model('Person', {
  name: String,
  number: Number
})

if(process.argv[2] === undefined) {
  Person
  .find({})
  .then(result => {
    result.forEach(person => {
      console.log(person)
      mongoose.connection.close()
    })
  })
} else {
const person = new Person({
  name: process.argv[2],
  number: process.argv[3]
})

person
  .save()
  .then(response => {
    console.log('Lisätään henkilön ' + process.argv[2] + ' numero ' + process.argv[3] + ' luetteloon.')
    mongoose.connection.close()
  })
}

