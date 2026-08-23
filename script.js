// String data type
let name = "Mariel";

// Integer data type
let age = 15;

// Float data type
let heightCm1 = 160.02;

// List data type
let countries_i_want_to_visit = ["Japan", "South Korea", "Paris"];

// Boolean data type
let student_type = true;

// Dictionary data type
let student_info = {
    color: "Pink",
    car_brand: "Porsche",
    shoe_size: 7,
    best_friend: "Wynn, Gwen, Kim, Pia"
};

// Set data type
let favorite_fruits = new Set([
    "Mango",
    "Strawberry",
    "Apple",
    "Watermelon",
    "Grapes"
]);

// Tuple data type
let days_of_week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

// Display all data on the webpage
document.getElementById("output").innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Height:</strong> ${heightCm1} cm</p>
    <p><strong>Countries:</strong> ${countries_i_want_to_visit.join(", ")}</p>
    <p><strong>New Student:</strong> ${student_type}</p>
    <p><strong>Student Information:</strong> ${JSON.stringify(student_info)}</p>
    <p><strong>Favorite Fruits:</strong> ${[...favorite_fruits].join(", ")}</p>
    <p><strong>Days:</strong> ${days_of_week.join(", ")}</p>
`;