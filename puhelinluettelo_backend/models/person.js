const mongoose = require('mongoose')
var Schema = mongoose.Schema

// korvaa url oman tietokantasi urlilla!
const url = 'mongodb://hirvi:hirvio@ds121118.mlab.com:21118/fullstack2018'

mongoose.connect(url)
mongoose.Promise = global.Promise

const personSchema = new Schema({
    name:  String,
    number: String
})

/*const formatPerson = (person) => {
    return {
      name: person.name,
      number: person.number,
      id: person.id
    }
  }*/

personSchema.statics.format = function(person) {
    return {
        name: person.name,
        number: person.number,
        id: person.id
      }
}

const Person = mongoose.model('Person', personSchema)

module.exports = Person