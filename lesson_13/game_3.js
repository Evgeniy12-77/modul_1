let userValue = Number(prompt("Enter the number from 1 to 3. 1 is stone, 2 - scissors, 3 - paper"))
let progValue = Math.ceil(Math.random() * 3)
alert(`The programm number is ${progValue}`)
if (userValue === 1 && progValue > 1 || userValue === 2 && progValue === 3) {
   alert("Yeah! You won!")
}
else if (userValue === 3 && progValue < 3 || userValue === 2 && progValue === 1) {
   alert("Sorry! You lost")
} else {
   alert("The friendship won!")
}