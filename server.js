const inquirer = require('inquirer')
const fs = require('fs');

require("console.table");

const mysql = require('mysql');
const { errorMonitor } = require('events');
const { error } = require('console');

const connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "rootroot",
    database: "employee_trackerDB"
})


// Main Menu Question and Switch
const main = () => {

    inquirer
        .prompt([
            {
                type: "list",
                name: "main",
                message: "What would you like to do?",
                choices: ["View all employees", "View employees by department", "View employees by role", "Add a new employee", "Add a new department", "Add a new role", "Update employee roles",]
            }
        ]).then((answer) => {
            switch (answer.main) {
                case "View all employees": getEmployeeInformation()
                    break;
                case "View employees by department": getDepartmentInformation()
                    break;
                case "View employees by role": getEmployeeRolesInfo()
                    break;
                case "Add a new employee": getNewEmployeeInfo()
                    break;
                case "Add a new department": getNewDepartmentInfo()
                    break;
                case "Add a new role": getNewRoleInfo()
                    break;
                case "Update employee roles": getUpdateRoleInfo()
                    break;
                case "Exit": getSQL()
                    break;
            }
        })

    }

    // View All Employees
    const getEmployeeInformation = () => {
        // SQL Database?

        connection.query("SELECT * FROM Employee", (err, queryResult) => {

            console.log(err)
            console.table(queryResult);

            main();
        })
    }

    //View Employees By Department
    const getDepartmentInformation = () => {

        connection.query("SELECT * FROM Department ", (err, queryResult) => {

            console.log(err)
            console.table(queryResult);

            main();
        })
    }

    // View Employees By Roles
    const getEmployeeRolesInfo = () => {

      connection.query("SELECT * FROM Role ", (err, queryResult) => {

            console.log(err)
            console.table(queryResult);

            main();
        })
    }

    // Add New Employee
    const getNewEmployeeInfo = () => {

        inquirer
            .prompt([
                {
                    type: "input",
                    name: "FN",
                    message: "What is the firt name of the employee?",
                },
                {
                    type: "input",
                    name: "LN",
                    message: "What is the last name of the employee?",
                },
                {
                    type: "input",
                    name: "title",
                    message: "What is the their title?",
                },
                {
                    type: "input",
                    name: "department",
                    message: "What department are they in?",
                },
                {
                    type: "input",
                    name: "manager",
                    message: "Who is their manager?",
                },
            ]).then((answers) => {
                connection.query(`INSERT INTO Department (name) VALUES ("${answers.FN}", "${answers.LN}", "${answers.title}", "${answers.department}", "${answers.manager}" )`, (err, queryResult) => {

                    console.log(err)
                    console.table(queryResult);
        
                    main();
                })
                
            })
    }

    // Add New Department
    const getNewDepartmentInfo = () => {

        inquirer
            .prompt([
                {
                    type: "input",
                    name: "newDepartment",
                    message: "What is the name of the new department?",
                }
            ]).then((answers) => {

                connection.query(`INSERT INTO Department (name) VALUES ("${answers.newDepartment}")`, (err, queryResult) => {

                    console.log(err)
                    console.table(queryResult);
        
                    main();
                })

            })
    }

    // Add New Role
    const getNewRoleInfo = () => {

        inquirer
            .prompt([
                {
                    type: "input",
                    name: "newRole",
                    message: "What is the name of the new role?",
                }
            ]).then((answers) => {
                connection.query(`INSERT INTO Department (name) VALUES ("${answers.newRole}")`, (err, queryResult) => {

                    console.log(err)
                    console.table(queryResult);
        
                    main();
                })
            })
    }

    // Update A Role
    const getUpdateRoleInfo = () => {

        inquirer
            .prompt([
                {
                    type: "input",
                    name: "updateRole",
                    message: "What role would you like to update?",
                }

            ]).then((answers) => {
                const updateRole = new updateRole(answers.updateRole)
            
            })

    }


    connection.connect(() => {
        console.log('Successfully connected to database!')
        main ();
    })