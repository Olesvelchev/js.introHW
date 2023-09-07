// //1st exercise
// //function sumSliceArray(arr, first, second) {
//     if (!Number.isInteger(first) || !Number.isInteger(second)) {
//         throw new Error("Both 'first' and 'second' must be integers.");
//     }

//     if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
//         throw new Error("Invalid index values. Both indices must be within the array's bounds.");
//     }

//     return arr[first] + arr[second];
// }
// //2nd exercise
// function checkAge() {
//     try {
//         const name = prompt("Введіть ваше ім'я:");
//         const age = parseInt(prompt("Введіть ваш вік:"));
//         const status = prompt("Введіть ваш статус (адмін, модератор, користувач):").toLowerCase();

//         if (isNaN(age)) {
//             throw new TypeError("Age must be a number.");
//         }

//         if (age < 18 || age > 70) {
//             throw new RangeError("Age must be between 18 and 70.");
//         }

//         if (!name || !age || !status) {
//             throw new Error("The field is empty! Please enter your data.");
//         }

//         if (status !== "адмін" && status !== "модератор" && status !== "користувач") {
//             throw new EvalError("Invalid status entered.");
//         }

//         alert("Ви маєте доступ до перегляду фільму!");
//     } catch (error) {
//         alert(`Помилка: ${error.name}\n${error.message}`);
//     }
// }

// //3rd exercise
// function calcRectangleArea(width, height) {
//     if (typeof width !== "number" || typeof height !== "number") {
//         throw new TypeError("Both width and height must be numbers.");
//     }

//     return width * height;
// }

// //4rd exercie
// class MonthException {
//     constructor(message) {
//         this.name = 'MonthException';
//         this.message = message;
//     }
// }

// function showMonthName(month) {
//     const months = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//     ];

//     if (month < 1 || month > 12) {
//         throw new MonthException("Incorrect month number.");
//     }

//     return months[month - 1];
// }

// //5th exercise
// function showUser(id) {
//     if (id < 0) {
//         throw new Error("Negative id is not allowed.");
//     }
    
//     return { id };
// }

// function showUsers(ids) {
//     const users = [];
    
//     for (const id of ids) {
//         try {
//             const user = showUser(id);
//             users.push(user);
//         } catch (error) {
//             console.log(`Помилка для id ${id}: ${error.message}`);
//         }
//     }
    
//     return users;
// }