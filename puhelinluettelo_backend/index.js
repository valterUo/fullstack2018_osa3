const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const Person = require('./models/person')
const cors = require('cors')

app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())
app.use(morgan(':method :url :content :status :res[content-length] - :response-time ms'))

morgan.token('content', function getContent (req) {
  const jotain = JSON.stringify(req.body)
  return jotain
})

  app.get('/api', (req, res) => {
    res.send('<h1>Serveri toimiii.</h1>')
  })

app.get('/api/persons', (request, response) => {
  Person
  .find({})
  .then(persons => {
    console.log(persons)
    response.json(persons.map(Person.format))
  }).catch(error => {
    console.log(error)
    response.status(404).end()
  })
  })

  app.get('/info', (request, response) => {
    Person.count({})
    .then(count => {
    let d = new Date()
    let string = '<p>Puhelinluettelossa ' + count + ' henkilön tiedot.</p><p>'+ d +'</p>'
    response.send(string)
    })
  })

  app.get('/api/persons/:id', (request, response) => {
    Person
    .findById(request.params.id)
    .then(person => {
      if (person) {
      response.json(Person.format(person))
      } else {
        response.status(404).end()
      }
    }).catch(error => {
      console.log(error)
      response.status(400).send({ error: 'malformatted id' })
    })
  })

  app.delete('/api/persons/:id', (request, response) => {
    Person
    .findByIdAndRemove(request.params.id)
    .then(person => {
      if (person) {
        response.status(204).end()
      } else {
        response.status(404).end()
      }
    }).catch(error => {
      console.log(error)
      response.status(404).end()
    })
  })
  
  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (body.name === undefined) {
        return response.status(400).json({error: 'Nimi puuttuu'})
    }

    if(body.number === undefined) {
      return response.status(400).json({error: 'Numero puuttuu'})
    }

    const person = new Person({
      name: body.name,
      number: body.number
    })

    Person
    .find({name: body.name})
    .then(result => {
      if(result[0] === undefined) {
        person
        .save()
        .then(result => {
        console.log('Person saved!')
        response.json(result)
  })
    .catch(error => {
    console.log(error)
    response.status(404).end()
  })
  } else {
    response.status(400).json({error: 'Nimi on jo luettelossa.'})
        }
    }).catch(error => {
      console.log(error)
      response.status(404).end()
    })
  })

  app.put('/api/persons/:id', (request, response) => {
    Person
    .findByIdAndUpdate(request.params.id, {number: request.body.number})
    .then(
      response.status(204).end()
    ).catch(error => {
      console.log(error)
      response.status(404).end()
    })
  })
  
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })