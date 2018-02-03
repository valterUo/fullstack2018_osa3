const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let persons = [
    {name: "Arto Hellas", 
    number: "040-123456", 
    id: 1},
    {name: 'Martti Tienari', 
    number: '040-123456', 
    id:2},
    {name: 'Arto Järvinen', 
    number: '040-123456',
    id:3},
    {name: 'Lea Kutvonen', 
    number: '040-123456',
    id: 4}
  ]

  app.get('/api', (req, res) => {
    res.send('<h1>Serveri toimiii.</h1>')
  })

app.get('/api/persons', (req, res) => {
    res.json(persons)
  })

  app.get('/info', (req, res) => {
    let henkiloita = persons.length
    let d = new Date()
    let string = '<p>Puhelinluettelossa ' + henkiloita + ' henkilön tiedot.</p><p>'+ d +'</p>'
    res.send(string)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
  
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
  })
  
  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (body.name === undefined) {
        return response.status(400).json({error: 'Nimi puuttuu'})
    }

    if(body.number === undefined) {
        return response.status(400).json({error: 'Numero puuttuu'})

    }

    if(persons.find(person => person.name === body.name)){
      return response.status(400).json({error: 'Nimi on jo luettelossa.'})
    }
  
    const person = {
      name: body.name,
      number: body.number,
      id: Math.floor(Math.random() * Math.floor(10000))
    }
  
    persons = persons.concat(person)
    console.log(person)
    response.json(person)
  })

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})