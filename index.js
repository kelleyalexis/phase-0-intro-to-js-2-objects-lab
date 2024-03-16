
const employee = {
  name: "Linda",
  streetAddress: "304 Cloverway"
}
const updateEmployeeWithKeyAndValue = (employee, key, value) => {
  employee = {...employee, [key]: value};
  
  return employee;
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
  employee[key] = value; 

  return employee;
}

const deleteFromEmployeeByKey = (employee, key) => {
  const newEmployee = { ...employee }; 
  delete newEmployee[key]; 

  return newEmployee;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
  delete employee[key];

  return employee;
}


