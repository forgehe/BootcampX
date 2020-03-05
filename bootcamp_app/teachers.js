const {Pool} = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx"
});

pool.connect();
let args = process.argv.slice(2);
// console.log(args);

pool
  .query(
    `
    SELECT
      DISTINCT teachers.name AS teacher,
      cohorts.name AS cohort
    FROM assistance_requests
    JOIN teachers ON teacher_id = teachers.id
    JOIN students ON student_id = students.id
    JOIN cohorts ON students.cohort_id = cohorts.id
    WHERE
      cohorts.name LIKE '%' || $1 || '%'
    ORDER BY
      teachers.name;
    `,
    args
  )
  .then(res => {
    // console.log(res.rows);
    res.rows.forEach(output => {
      console.log(`${output.cohort}: ${output.teacher}`);
    });
  })
  .catch(err => console.error("query error", err.stack));
