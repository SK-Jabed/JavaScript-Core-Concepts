const student = {
    name: "Sheikh Jabed",
    roll: 658840,
    address: "Dhaka",
    isSingle: true,
    friends: ["Ratul", "Shihab", "Rafi", "Fahad"],
    grades: [{class: "Five", year: 2015, grade: 5.00}, {class: "Ten", year: 2021, grade: 5.00}],
    department: function() {
        console.log("Computer Science and Technology");
    },
    car: {
        brand: "Tesla",
        Price: 50000000,
        made: 2020,
        color: "Black",
        manufacturer: {
            name: "Tesla",
            ceo: "Elon Mask",
            country: "USA"
        }
    }
}

console.log(student);
console.log(student.name);
console.log(student.friends);
console.log(student.car);
console.log(student.grades);
console.log(student.car.manufacturer);
