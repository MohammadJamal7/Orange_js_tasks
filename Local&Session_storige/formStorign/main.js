let nameOf = document.getElementById('name');
let age = document.getElementById('age');
let major = document.getElementById('major');
let uni = document.getElementById('university');
let desc = document.getElementById('description');
let gender = document.getElementsByName('gender'); // Get checked radio button value
let languagesNodeList = document.querySelectorAll('.langs');

// Assuming gender is being captured from radio buttons with name 'gender'

function submitForm(){
    
       let selectedGender;
    for(var i = 0; i < gender.length; i++) {
        if(gender[i].checked == true) {
            selectedGender = gender[i].value;
        break;
     }
    }

    
let languages = []; // Initialize languages as an empty array

languagesNodeList.forEach(lang => {
    if (lang.checked) {
        languages.push(lang.value);
        
    }
})

let person = {
    pName: nameOf.value,
    pAge:age.value,
    pGender:selectedGender,
    pUni:uni.value,
    pMajor:major.value,
    pDesc:desc.value,
    pLangs:languages
}
  let persons  = [];
  persons.push(person);
localStorage.setItem('persons',JSON.stringify(person));
}

  
  
