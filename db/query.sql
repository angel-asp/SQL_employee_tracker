USE employee_tracker;

select * FROM employee
join role on employee.role_id = role.id
join department on role.department = department.id;;

select * FROM role
join department on role.department = department.id;

SELECT * FROM department;