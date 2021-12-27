const employee = {
    name: "Kay", 
    streetAddress: "11 State Street",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
  return{...obj, [key]: value,};
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    
    return obj;
};

function deleteFromEmployeeByKey(obj, key, value){
    return{obj, [key]: value};
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    obj[key] = value;
    
    return obj;
}
