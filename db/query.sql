select * FROM employee
join role on employee.role_id = role.id;

select * FROM role
join department on role.department = department.id;
