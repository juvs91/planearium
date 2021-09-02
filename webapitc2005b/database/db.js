const sql = require('mssql')

// Server=tcp:webclass1.database.windows.net,1433;Initial Catalog=web;Persist Security Info=False;User ID=webclass1;Password=tc_2005_b;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;

const config = {
    user: 'webclass1',
    password: 'tc_2005_b',
    database: 'web',
    server: 'webclass1.database.windows.net',
    options: {
      trustedConnection: true
    }
}
const dockerConfig = {
    user: 'sa',
    password: 'tc_2005_b',
    database: 'master',
    server: 'localhost',
    port: 1433,
    options: {
    trustedConnection: true
  }
}
let stringConnection = 'Server=tcp:webclass1.database.windows.net,1433;Initial Catalog=web;Persist Security Info=False;User ID=webclass1;Password=tc_2005_b;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;'
let dockerStringConnection = 'Server=localhost,1433;Database=master;User ID=sa;Password=tc_2005_b;'
const poolPromise = new sql.ConnectionPool(dockerConfig)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}