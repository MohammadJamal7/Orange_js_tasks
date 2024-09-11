//Task 2


//Question 1
let monthNumber = Number(prompt('Enter the month number'));
console.log(monthNumber);
let monthName ;

switch (monthNumber) {
 case 1:
    monthName = "January";
    break;
 case 2:
    monthName = "February";
    break;
 case 3:
    monthName = "March";
    break;
 case 4:
    monthName = "April";
    break;
 case 5:
    monthName = "May";
    break;
 case 6:
    monthName = "June";
    break;
 case 7:
    monthName = "July";
    break;
 case 8:
    monthName = "August";
    break;
 case 9:
    monthName = "September";
    break;
 case 10:
    monthName = "October";
    break;
 case 11:
    monthName = "November";
    break;
 case 12:
    monthName = "December";
    break;
 default:
    monthName = "Invalid month number";
}
document.getElementById("input").textContent = monthNumber;
document.getElementById("output").textContent = monthName;

//Question 2

let i, number =1;
for ( i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j<=i ; j++) {
   row+=number +" ";
   number++;
    
  }
  console.log(row);
}


//Question 3

for (let index = 1; index <= 1000; index++) {
    if (index % 13==0) {
        console.log(index);        
    }
    
}


//Question 4 

function multiplication2 (x,y){
    let sum=0;
     for(let i=1;i<=y;i++) {
        sum+=x;
     }
     return sum;
}


//Question 5
function areaTriangleCalc(base,height){

    return 0.5 * base *height;
}



//Question 6

function isPadigital(number) {

   
    number = String(number);
    const numSet = new Set(number.split(''));
    console.log(numSet);
    //Checking if the number's length less than 9 ==> won't pandigital
    if (numSet.size < 10) return false;

    for (let i = 0; i < numSet.size; i++)
    {
        if (!numSet.has(i.toString()))
        {
            return false;
        }

        return true;
    }

}
console.log(isPadigital(12345609879849849));



//Question 7
function getSelectedValue(){
    const drinksList = document.getElementById('drinksSelect');
let selectedDrink = drinksList.value;
console.log(selectedDrink);
switch(selectedDrink.toLocaleLowerCase()) {

    case 'coke':
        alert('It costs 20 dollars');
        break;
    case 'water':
        alert('It costs 10 dollars');
        break;
    case 'juice':
        alert('It costs 25 dollars');
        break;
        case 'tea':
        alert('It costs 23 dollars');
        break;
    default:
        alert('The drink isn\'t avaliable');
}

}