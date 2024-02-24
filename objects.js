//type 1 
const emp = {
    name: "Dacs1"
};
//emp2.name =  "Dacs1";
console.log(emp);

//type 2 
const emp2 = new Object({name: "Dacs2"});
//emp2.name =  "Dacs2";
console.log(emp2);

//type 3
const emp3 = Object.create(emp);
console.log(emp3.name);