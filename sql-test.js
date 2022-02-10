const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: '123456',
    database: 'postgres'
})

const allPuppiesSql = `
  SELECT name, age_yrs, breed, weight_lbs, microchipped
  FROM puppies;
`;

async function selectAllPuppies() {
    const results = await pool.query(allPuppiesSql);
    console.log(results.rows);
    pool.end();
  }
  
selectAllPuppies();