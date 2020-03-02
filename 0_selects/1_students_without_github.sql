SELECT
  students.id,
  students.name,
  students.email,
  students.cohort_id
FROM cohorts
JOIN students ON cohorts.id = students.cohort_id
WHERE
  github IS NULL
ORDER BY
  cohort_id ASC;