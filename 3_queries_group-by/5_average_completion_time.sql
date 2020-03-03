SELECT
  students.name AS student,
  AVG(assignment_submissions.duration) AS average_assignment_duration
FROM assignments
JOIN assignment_submissions ON assignments.id = assignment_submissions.assignment_id
JOIN students ON students.id = assignment_submissions.student_id
WHERE
  students.end_date IS NULL
GROUP BY
  students.name
ORDER BY
  AVG(assignment_submissions.duration) DESC;