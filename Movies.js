const z = require('zod')

const movieShema = z.object({
  title: z.string({
    invalid_type_error: 'Movie title must be a string',
    required_error: 'Movie titlr is require.'
  }),
  year: z.number().int().min(1900).max(2024),
  direction: z.string(),
  duration: z.number().min(0).max(10),
  poster: z.string().url({
    message: 'Poster url be a valid Url'
  }),
  genre: z.array(
    z.enum(['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi'])
  )
})

function validateMovie (input) {
  return movieShema.safeParse(input)
}

function validatePartialMovie (input) {
  return movieShema.partial().safeParse(input)
}

module.exports = { validateMovie, validatePartialMovie }
