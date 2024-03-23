
document.getElementById("concatenateSomeStrings").onclick = function(){

    let message = "Good day";
    let name = "Bilal";
    let banger = "!";

    console.log(message + name + banger);

document.getElementById("output").innerHTML = message + " " + name + banger;
}

document.getElementById("askNameFromUser").onclick = function(){
    let message = "Good day"
    let firstName = prompt("Please enter your first name");
    let lastName = prompt("Please enter your last name");
    let banger ="!";
    let fullName = firstName + " " + lastName
    console.log(fullName)
    document.getElementById("output").innerHTML = message +" " + fullName + banger
}
document.getElementById("comparisonOperators").onclick =function(){

    var num1 = "15";
    var num2 = 15;

    if(num1 == num2){
       console.log("Yes, your condition is true")
    }
    else{
        console.log("No, your condition is fales")
    }
}
document.getElementById("ifElseIf").onclick = function(){

    var num1 = 15;
    var num2 = 15;

    console.log(num1 + num2)

    if (num1 > num2){
        console.log("Yes, your first condition is true")
    }
    else if (num1 === num2){
        console.log("Yes, your second condition is true")
    }
    else if (num1 >= num2){
        console.log("Yes, your third condition is true")
    }
    else{
        console.log("No, your condition is false")
    }
}
document.getElementById("testingSetsOfConditions").onclick = function(){

    var age = +prompt("Your age")
    var weight = +prompt("Your weight")

    if ( age>= 18 && weight <= 70 ){

        console.log("You're a smart man.")
    }

    else if (age>= 18 && weight > 70){

        console.log("You're a fat guy.")
    }
    else{
        console.log("You're a baby")
    }
}
document.getElementById("ifstatementsNested").onclick = function(){
    let age = +prompt("Inter your age.")

if (age >= 18){
    let weight = +prompt("Your Weight")
    if (weight <= 70){
        console.log("You're a smart man.")
    }
    else{
        console.log("You're a fat guy.")
    }
}

    else{
        console.log("You're a baby")
}
}
document.getElementById("login").onclick = function(){
    var userName = prompt("Your user name")
    var pass = prompt("your password")

    if (userName ==="bilal" && pass==="123"){
        console.log("User loged in")
    document.getElementById("output").innerHTML = "Username =" + userName
    document.getElementById("output").innerHTML += "<br /> Password =" + pass
    }
     else{
        console.log("Usename or password is incorrect.")
     }
}
document.getElementById("clear-statement-button").onclick = function(){
    document.getElementById("statement").innerHTML = ""
}
document.getElementById("clear-statement-button").onclick = function(){
    document.getElementById("statement").innerHTML = ""
}
document.getElementById("clear-output").onclick = function(){
    document.getElementById("output").innerHTML = ""
}
window.onload = function(){
    let userName = prompt("Please inter your full name")
    document.getElementById("userName").innerHTML= "Good day " + userName + "!"
}