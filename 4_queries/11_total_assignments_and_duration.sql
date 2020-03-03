SELECT
  day,
  COUNT(day) AS number_of_assignments,
  SUM(duration) AS duration
FROM assignments
GROUP BY
  DAY
ORDER BY
  day;