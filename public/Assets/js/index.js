const inquirer = require('inquirer')
const fs = require('fs');
const express = require('express');

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

const getEmployeeInformation = () => {
// SQL Database?
}

const getDepartmentInformation = () => {
    // SQL Database?
    }

const getEmployeeRolesInfo = () => {
        // SQL Database?
        }

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


    
    inquirer
       .prompt([
       {
           type: "list",
           name: "main",
           message: "What would you like to do?",
           choices: ["View all employees", "View employees by department", "View employees by role", "Add a new employee", "Add a new department", "Add a new role","Update employee roles",]
       }
    





    
    ]).then((answers) => {
        const newEngineer = new Engineer(answers., answers.id, answers.email, answers.github)
        team.push(newEngineer)
        employeeType();
    })


