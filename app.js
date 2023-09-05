const express = require('express')
const movies = require('./movies/movies.json')
const crypto = require('node:crypto')
const app = express()
const { validateMovie, validatePartialMovie } = require('./Movies')
app.disable('x-powered-by')

app.use(express.json())

app.get('/movies', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  const { genre } = req.query
  if (genre) {
    const filterMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filterMovies)
  }

  res.json(movies)
})

app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  // res.json(movies[id])
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)
  res.status(404).json({ message: 'Movie not found' })
})

app.post('/movies', (req, res) => {
  const result = validateMovie(req.body)

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }
  const newMovie = {
    id: crypto.randomUUID(),
    ...result.data
  }

  movies.push(newMovie)
  res.status(201).json(newMovie)
})

app.patch('/movies/:id', (req, res) => {
  const { id } = req.params
  const result = validatePartialMovie(req.body)
  const movieIndex = movies.findIndex(movie => movie.id === id)

  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not fouund' })
  }

  const updateMovie = {
    ...movies[movieIndex],
    ...result.data
  }

  movies[movieIndex] = updateMovie

  return res.json(updateMovie)
}

)

const Puerto = process.env.PORT ?? 1234
app.listen(Puerto, () => {
  console.log('server listening on port http://localhost:1234')
})
