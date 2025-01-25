//!DELETE
//?1-The CEO found out your plan of adding your family to the company, so now he want to delete them from company. he need to right a function to delete these people from company.

/** WRITE YOUR CODE BELOW DOWN */
let employees = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Doe" },
    { firstName: "Alice", lastName: "Smith" },
    { firstName: "Bob", lastName: "Johnson" }
];
function deleteFamilyMembers(familyNames) {
    employees = employees.filter(employee => {
        return !familyNames.some(familyName => 
            employee.firstName === familyName.firstName || 
            employee.lastName === familyName.lastName);
    });
}
const familyMembers = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Doe" }
];
deleteFamilyMembers(familyMembers);
console.log(employees);
//******************************************************************************** */
//?2-The CEO of company got crazy because of financial problems, so he decided to fire employees with even ID's.
//todo: write a function to delete them.

/** WRITE YOUR CODE BELOW DOWN */
employees = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Jane", lastName: "Doe" },
    { id: 3, firstName: "Alice", lastName: "Smith" },
    { id: 4, firstName: "Bob", lastName: "Johnson" }
];
function deleteEvenIDEmployees() {
    employees = employees.filter(employee => employee.id % 2 !== 0);
}
deleteEvenIDEmployees();
console.log(employees);

//*End of story :)

