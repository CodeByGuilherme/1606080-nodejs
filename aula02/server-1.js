import http from 'http'
import currentDate from './currentDate.js'

http.createServer((req, res) => {
  
  res.writeHead(200 , { 'Content-type': 'text/html; charset=utf-8' })

  // Logica - ela fica dentro apenas do BE
  const total = (25 + 36) / 2
  const frutas = ['banana', 'laranja', 'uva', 'melão']

  
  res.write('<p>Bem vindo</p>')
  res.write(`${currentDate().getFullYear()}!`)
  res.write('<hr/>')

  frutas.map(f => {
    res.write(`<p>${f}</p>`)
  })

  res.end()

}).listen(3033)