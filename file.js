function calculate() {
var age=document.getElementById
("age").value;

if(isNaN(age)){
    alert('Please enter a valid age!');
}
else if (age>=18) {
    alert("you are eligible for vote")
}
else {
    alert("you are not eligible vote")
}
}