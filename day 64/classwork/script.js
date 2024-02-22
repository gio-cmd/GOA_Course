// const me = {
//     name : "giorgi",
//     lastName : "vanishvili",
//     age : 15,
//     favColor : "blue",
//     nameLog : function(){
//         console.log(`your name is ${me.name}`)
//     }
// }

// me.name = "Giorgi"
// me.email = "vanishvilig1org2@gmail.com";


// const friend = {
//     name : "luka",
//     lastName : "arabashvili",
//     age : 15,
//     favColor : "blue"
// }


// const car = {
//     name: "ford",
//     model: "brand new",
//     weight: 2000,
//     start() {
//         console.log("car is starting");
//     },
//     break: function(seconds) {
//         for (let i = seconds; i >= 0; i--) {
//             console.log(`Car will break in ${i}`);
//         }
//     }
// };

// car.break(10);



// car.start = "hello world"


const me = {
    name : "giorgi",
    lastName : "vanishvili",
    age : 15
};

function matchProperty() {
    const inputText = document.getElementById('inputField').value;
    const propertyValue = me[inputText];

    if (propertyValue !== undefined) {
        console.log(propertyValue);
    }
}


document.getElementById('matchButton').addEventListener('click', matchProperty);