const fs = require('fs')

fs.readFile('public/Molteni&C/Aster/AsterCoffeeTable.jpg', (err, data) => {
  if (err) throw err
  let Aster64 = Buffer.from(data, 'binary').toString('base64')
  console.log(Aster64)
})
