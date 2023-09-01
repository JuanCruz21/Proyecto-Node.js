const express = require('express')
const movies = require('./movies/movies.json')
const app = express()

app.disable('x-powered-by')

app.use(express.json())

app.get('/movies', (req, res) => {
  res.json(movies)
})

app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  // res.json(movies[id])
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)
  res.status(404).json({ message: 'Movie not found' })
})

const Puerto = process.env.PORT ?? 1234
app.listen(Puerto, () => {
  console.log('server listening on port http://localhost:1234')
})
