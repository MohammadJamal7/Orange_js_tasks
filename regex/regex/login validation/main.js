
    
    
    

    function checkUsername(element) {
    var nameRegex = /^[A-Za-z]{6,30}$/;
    let error = document.getElementById("error-message");
    let error2 = document.getElementById("error-message2");
    var NameValue = element.value;

    error.innerHTML = "";
    error2.innerHTML = "";

    if(!nameRegex.test(NameValue)) {
        switch(element.id) {
            case "first-name": {
                error.innerHTML = "Name should be more than 6 characters without numbers";
                break;
            }
            case "last-name": {
                error2.innerHTML = "Name should be more than 6 characters without numbers";
                break;
            }
        }
    }
}
        
        function dateValidation() {
            var date = document.getElementById('birth-date').value;
            let dateMessage = document.getElementById('date-message');
            const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/;
            dateMessage.innerHTML = "";
            if (!dateRegex.test(date)) {
                dateMessage.innerHTML = "Date isn't valid";
            }
        }
        
        function emailValidation() {
            var email = document.getElementById('email').value;
            let emailMessage = document.getElementById('email-message');
            const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
            emailMessage.innerHTML = "";
            if (!emailRegex.test(email)) {
                emailMessage.innerHTML = "Email isn't valid";
            }
        }
        
        function checkEmail() {
            let email = document.getElementById('email').value;
            let confMessage = document.getElementById('conf-message');
            let confEmail = document.getElementById('confirm-email').value;
            confMessage.innerHTML = "";
            if (email !== confEmail) {
                confMessage.innerHTML = "Email isn't matching";
            }
        }

        function passvalidation() {
            let pass = document.getElementById('password').value;
            let passMessage = document.getElementById('pass-message');
            const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
            passMessage.innerHTML = "";
            if (!passwordRegex.test(pass)) {
                passMessage.innerHTML = "Password isn't valid";
            }
3        }

        function checkPass() {
            let passw = document.getElementById('password').value;
            let confPassMessage = document.getElementById('conf-pass-message');
            let confPass = document.getElementById('confirm-password').value;
            confPassMessage.innerHTML = "";
            if (passw !== confPass) {
                confPassMessage.innerHTML = "Password isn't matching";
            }
        }

        function phoneValidation() {
            var phone = document.getElementById('phone').value;
            let phoneMessage = document.getElementById('phone-message');
            const phoneRegex = /^\d{10}$/;
            phoneMessage.innerHTML = "";
            if (!phoneRegex.test(phone)) {
                phoneMessage.innerHTML = "Email isn't valid";
            }
        }
        

        //Check the form conrrectness to store
   var fname = document.getElementById('first-name').value;
   var lname = document.getElementById('last-name').value;
   
 function validateForm(){
    checkUsername(fname);
    checkUsername(lname);
    dateValidation();
    emailValidation();
    checkEmail();
    passvalidation();
    checkPass();
    phoneValidation();
        
      let isValid = true;
      const errorMessage = document.querySelectorAll('.error-message');
      console.log(errorMessage);
       errorMessage.forEach((msg) => {
          if (msg.innerHTML!== "") {
             isValid = false;
          }
          return true;
       });


             return isValid;
        }




      
      

        //Storing in local storige
        let users = [];
       
        function storeData(){
            //let pass = document.getElementById('password').value;
           if (validateForm()) {
          
             let user = {
                firstName:fname,
                lastName:lname,
                Email:email,
                Phone:phone,
            }
            let jsonUsers = JSON.stringify(user);
            users.push(jsonUsers);
              
              
             
            localStorage.setItem('users',users);
            
            console.log(localStorage.getItem('users'));
           
           }
        }


