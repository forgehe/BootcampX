const {Pool} = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx"
});

pool.connect();
let args = process.argv.slice(2);
console.log(args);

pool
  .query(
    `
SELECT students.id, students.name, cohorts.name AS cohort_id
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE
cohorts.name LIKE '%' || $1 || '%'
LIMIT $2;
`,
    args
  )
  .then(res => {
    console.log(res.rows);
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`);
    });
  })
  .catch(err => console.error("query error", err.stack));
