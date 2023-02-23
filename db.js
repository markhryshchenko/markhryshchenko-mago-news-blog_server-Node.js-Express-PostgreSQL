const Pool = require('pg').Pool
const pool = new Pool ({
    user: 'postgres',
    password: 'ghbdtn721',
    host: 'localhost',
    port: 5432,
    database: 'news_magazine'
})

module.exports = pool