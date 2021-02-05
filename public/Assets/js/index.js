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








    {
        type: "input",
        name: "repoTitle",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.",
    
    },
    {
        type: "input",
        name: "description",
        message: "How would you describe this project?",
    },
    {
        type: "input",
        name: "technology",
        message: "What technology was used?",
    
    },
    {
        type: "input",
        name: "installation",
        message: "What steps are required for installation?",
    },
    {
        type: "input",
        name: "contribution",
        message: "Please list any collaborators, if any, along with any third-party assets that require attribution.",
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like for your project?",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License","Boost Software License 1.0", "The Unlicense",]
    },
    {
        type: "input",
        name: "test",
        message: "Please provide examples on how to run tests",
    
    },
    {
        type: "input",
        name: "inquiries",
        message: "What is your email address for any future inquiries?",
    
    },
    ]).then((answers) => {
        const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        team.push(newEngineer)
        employeeType();
    })

}
