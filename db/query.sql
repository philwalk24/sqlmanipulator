SELECT roles.title AS rolez, department.names AS department, employee.first_name, employee.last_name
FROM roles
LEFT JOIN department ON roles.department_id = department.id
LEFT JOIN employee ON roles.id = employee.role_id;