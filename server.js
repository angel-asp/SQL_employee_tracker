
const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');




const db = mysql.createConnection(
  {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Aasp2001',
    database: 'employee_tracker'
  },
  console.log(`Connected to the employee_tracker database.`)
);

anythingElse = () => { 
  inquirer.prompt([ 
    {
      name: 'choices',
      type: 'list',
      loop: 'false',
      message: 'Would you like to do anything else?',
      choices: [
        'Yes',
        'No',
      ]}
    ])
      .then((answers) => {
        const {choices} = answers;
        if (choices === 'Yes') {
          promptUser();};

        if (choices === 'No') {
          return; };
      });
};

const getDepartments = () => {
  db.query(`SELECT * FROM department`, function (err, results) {
    console.table(results);
  });
};

const promptUser = () => {
  inquirer.prompt([
    {
      name: 'choices',
      type: 'list',
      loop: 'false',
      message: 'What would you like to do?',
      choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add Department',
        'Add Role',
        'Add Employee',
        'Update Employee Role',
        'Exit',
      ]
    }
  ]) .then((answers) => {
    const {choices} = answers;

    if (choices === 'View All Departments') {
          db.query(`SELECT * FROM department`, function (err, results) {
              console.table(results);
              anythingElse();
          });
    };
    
    if (choices === 'View All Roles') {
      
        db.query(`SELECT * FROM role join department on role.department = department.id;`, function (err, results) {
          console.table(results);
          anythingElse();
        });
      };
    

    if (choices === 'View All Employees') {
        
        db.query(`SELECT * FROM employee join role on employee.role_id = role.id join department on role.department = department.id;`, function (err, results) {
            console.table
          (results);
            anythingElse();
        });
    };
    

    if (choices === 'Add Department') {
      inquirer.prompt([
        {
          name: 'choices',
          type: 'input',
          message: 'What is the name of the department you would like to add?', }
          ])
      .then((answers) => {
        const {choices} = answers;
        db.query(`INSERT INTO department (name) VALUES ('${choices}')`, function (err, results) {
          console.log('Department Added!');
          anythingElse();
        });
      });
    };


    if (choices === 'Add Role') {
      inquirer.prompt([
        {
          name: 'name',
          type: 'input',
          message: 'What is the name of the role you would like to add?', },
        {
          name: 'salary',
          type: 'input',
          message: 'What is the salary of the role you would like to add?', },
        {
          name: 'department_id',
          type: 'choice',
          message: 'What is the department id of the role you would like to add?',
        }
          ])

      .then((answers) => {
        const {name, salary, department_id} = answers;
        db.query(`INSERT INTO role (title, salary, department) VALUES ('${name}', '${salary}', '${department_id}')`, function (err, results) {
          console.log('Role Added!');
          anythingElse();
        });
      });
    };

    if (choices === 'Add Employee') {
      inquirer.prompt([
        {
          name: 'first_name',
          type: 'input',
          message: 'What is the first name of the employee you would like to add?', },
        {
          name: 'last_name',
          type: 'input',
          message: 'What is the last name of the employee you would like to add?', },
        {
          name: 'role_id',
          type: 'choice',
          message: 'What is the role id of the employee you would like to add?', },
        ])
      .then((answers) => {
        const {first_name, last_name, role_id} = answers;
        db.query(`INSERT INTO employee (first_name, last_name, role_id) VALUES ('${first_name}', '${last_name}', '${role_id}')`, function (err, results) {
          console.log('Employee Added!');
          anythingElse();
        });
      });
    };

    if (choices === 'Update Employee Role') {
      inquirer.prompt([
        {
          name: 'id',
          type: 'input',
          message: 'What is the id of the employee you would like to update?', },
        {
          name: 'role_id',
          type: 'input',
          message: 'What is the new role id of the employee you would like to update?', },
        ])
      .then((answers) => {
        const {id, role_id} = answers;
        db.query(`UPDATE employee SET role_id = '${role_id}' WHERE id = '${id}'`, function (err, results) {
          console.log('Employee Role Updated!');
          anythingElse();
        });
      });
    }
    if (choices === 'Exit') {
      return;
    }
  })
};

promptUser();