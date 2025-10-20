var myInput = document.getElementById("password");
var confirmInput = document.getElementById("confirm_password");
var form_container=document.querySelector("#form_container")

if (myInput && confirmInput && form_container)
{
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");
  var matchMessage = document.getElementById("match-message");


  // When the user clicks on the password field, show the message box
  myInput.onfocus = function() {
  document.getElementById("message").style.display = "flex";
  
  }
  
  // When the user clicks outside of the password field, hide the message box
  myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
  
  }
  
  // When the user starts to type something inside the password field
  myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
  letter.classList.remove("invalid");
  letter.classList.add("valid");
  } else {
  letter.classList.remove("valid");
  letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
  capital.classList.remove("invalid");
  capital.classList.add("valid");
  } else {
  capital.classList.remove("valid");
  capital.classList.add("invalid");
  }
  
  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
  number.classList.remove("invalid");
  number.classList.add("valid");
  } else {
  number.classList.remove("valid");
  number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
  length.classList.remove("invalid");
  length.classList.add("valid");
  } else {
  length.classList.remove("valid");
  length.classList.add("invalid");
  }
  }
  function checkPasswordMatch() {
    if (confirmInput.value.length > 0 && myInput.value.length > 0)
    {
      matchMessage.style.display = "block";
      if (myInput.value === confirmInput.value) { 
        matchMessage.textContent = "✔ Passwords match";
        matchMessage.classList.remove("invalid");
        matchMessage.classList.add("valid");
      }
      
      else {
        matchMessage.textContent = "✖ Passwords do not match";
        matchMessage.classList.add("inalid");
        matchMessage.classList.remove("valid");
      }

    }
    else {
      matchMessage.style.display = "none";
    }
 }

}

function footer_padding() {
    const Footer = document.getElementById("Footer");
    var footer = document.getElementsByClassName("aft");
    footer.style.position = "relative";
    footer.style.top = "1rem";
}

document.addEventListener('DOMContentLoaded', () => {
    // Select the menu icon and navbar
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    // Check if the elements exist
    if (menuIcon && navbar) {
        // Add a click event to the menu icon
        menuIcon.addEventListener('click', () => {
            // Toggle classes for the menu icon and navbar
            menuIcon.classList.toggle('fa-times'); // Change to "X" icon when active
            navbar.classList.toggle('active');    // Show or hide the menu
        });
  } 
  else {
        console.error('Menu icon or navbar not found in the DOM.');
  }
    const mainIframe = document.querySelector('.page-frame'); 
    const mainBody = document.querySelector('body.Body'); 
            
    if (mainIframe && mainBody) {

        mainIframe.addEventListener('load', () => {
            
            try {
                const iframeLocation = mainIframe.contentWindow.location.href;

                if (iframeLocation.includes('AFT.html')) {
                    
                    mainBody.classList.add('aft-is-active');
                    
                } else {
                    
                    mainBody.classList.remove('aft-is-active');
                }
                
            } catch (e) {
                console.error('لا يمكن الوصول لمحتوى الـ iframe ', e);
            }
        });
        
       
        if (mainIframe.src && mainIframe.src.includes('AFT.html')) {
             mainBody.classList.add('aft-is-active');
        }
    }
    
}
)