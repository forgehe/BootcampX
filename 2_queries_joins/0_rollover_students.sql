SELECT
  students.name AS student_name,
  students.start_date AS student_start_date,
  cohorts.name AS cohort_name,
  cohorts.start_date AS cohort_start_date
FROM cohorts
JOIN students ON cohorts.id = students.cohort_id
ORDER BY
  cohorts.name;