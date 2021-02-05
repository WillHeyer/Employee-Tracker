const inquirer = require('inquirer')
const fs = require('fs');
const express = require('express');


// Main Menu Question and Switch
const main = () => {

 inquirer
    .prompt([
    {
        type: "list",
        name: "main",
        message: "What would you like to do?",
        choices: ["View all employees", "View employees by department", "View employees by role", "Add a new employee", "Add a new department", "Add a new role","Update employee roles",]
    }
]) .then((answer) => {
    switch (answer.main) {
        case "employeesAll" : getEmployeeInformation ()
        break;
        case "Department" : getDepartmentInformation ()
        break;
        case "employeeRoles" : getEmployeeRolesInfo ()
        break;
        case "addEmployee" : getNewEmployeeInfo ()
        break; 
        case "addDepartment" : getNewDepartmentInfo ()
        break;
        case "newRole" : getNewRoleInfo ()
        break;
        case "updateRoles" : getUpdateRoleInfo ()
        break;
        case "Exit" : getSQL ()
        break;
    }
})

// View All Employees
const getEmployeeInformation = () => {
// SQL Database?
}

//View Employees By Department
const getDepartmentInformation = () => {
    // SQL Database?
    }

// View Employees By Roles
const getEmployeeRolesInfo = () => {
        // SQL Database?
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
        const newEmployee = new Employee(answers.FN, answers.LN, answers.title, answers.department, answers.manager)
        // team.push(newEngineer)
        // employeeType()
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
                const newDepartment = new Department (answers.newDepartment)
                // team.push(newEngineer)
                // employeeType()
            })
    },

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
                const newRole = new Role (answers.newRole)
                // team.push(newEngineer)
                // employeeType()
            })
        },

// Update A Role
const getUpdateRoleInfo = () => {

        inquirer
           .prompt([
           {
               type: "input",
               name: "updateRole",
               message: "What role would you like to update?",
           },
          
    ]).then((answers) => {
                const updateRole = new updateRole (answers.updateRole)
                // team.push(newEngineer)
                // employeeType()
            })
        
};
