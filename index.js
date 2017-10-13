const { createServer } = require('http')

const server = createServer((req, res) => {
  res.end('Just testing...')
})

const PORT = 3030
server.listen(3030, err => {
  if (err) {
    console.error(err)
    process.exit(2)
  }

  console.info(`Listening on port ${ PORT }`)
})