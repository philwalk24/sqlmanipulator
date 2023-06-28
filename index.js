const mysql = require('mysql2');
const inquirer = require('inquirer');
let depart = ["accounting","marketing","human resources"];
let depNums = [1,2,3];
const options = [
  "View All Employees",
  "Add Employee",
  "Update Employer Role",
  "View All Roles",
  "Add Role",
  "View All Departments",
  "Add Department"
];

function askYou() {
  const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'likliklik',
    database: 'company_db'
  });

  inquirer.prompt([
    {
      type: "list",
      name: "w",
      message: "Select an option:",
      choices: options,
    },
  ])
  .then((answer) => {
    if (answer.w === options[0]) {
      db.query('SELECT * FROM employee', (err, res) => {
        if (err) {
          console.error(err);
          db.end();
          askYou();
          return;
        }
        console.table(res);
        db.end();
        askYou();
      });
    }
    else if (answer.w === options[3]) {
      db.query('SELECT * FROM roles', (err, res) => {
        if (err) {
          console.error(err);
          db.end();
          askYou();
          return;
        }
        console.table(res);
        db.end();
        askYou();
      });
    }
    else if (answer.w === options[5]) {
      db.query('SELECT * FROM department', (err, res) => {
        if (err) {
          console.error(err);
          db.end();
          askYou();
          return;
        }
        console.table(res);
        db.end();
        askYou();
      });
    }
    else if (answer.w === options[4]) {
      inquirer.prompt([
        
        {
          name: "role_name",
          type: "input",
          message: "insert a role name "
        },
        {
          name: "salary",
          type: "number",
          message: "what is the salary? "
        },
        {
          type: "list",
          name: "depa",
          message: "Select the department:",
          choices: depart,
        },

      ])
      .then((answer) => {
        const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?)`;
        
        //const params = [answer.role_name,answer.salary,];
          
      });
    }
    else if (answer.w === options[6]) {
      inquirer.prompt([
        
        {
          name: "dep_name",
          type: "input",
          message: "insert a department name "
        }
      ])
      .then((answer) => {
        const newDep = answer.dep_name;
        const sql = `INSERT INTO department (names) VALUES (?)`;
        const params = [newDep];
        depart.push(newDep);
        let newDepNum = depNums[depNums.length - 1];
        newDepNum = newDepNum+1;
        depNums.push(newDepNum);
        db.query(sql, params, (err, result) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log("SUCCESS!");
          db.end();
          askYou();
        });
      });
      
    }
    else {
      db.end();
      askYou();
    }
  })
  .catch((error) => {
    console.error(error);
    db.end();
    askYou();
  });
}

askYou();