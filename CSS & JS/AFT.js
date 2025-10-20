window.onscroll = function () {
    const navbar = document.getElementsByTagName("nav")[0];
    const links = navbar.getElementsByTagName("a");
    const  bar = this.document.getElementById("aft-menu-icon");
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        navbar.style.backgroundColor = "var(--textcolor)";
        bar.style.color="#000";
        for(let link of links)
            link.style.color = " var(--AFTColor)";
           navbar.className = "animate-top";
    }
    else{
        navbar.style.backgroundColor = " var(--AFTColor)";
        for(let link of links)
            link.style.color = "var(--textcolor)";
        navbar.className = "";
    }
}

function maxImage(obj){
    const max_image = document.getElementById("max_image");
    const image = max_image.getElementsByTagName("img")[0];
    max_image.style.display = "block";
    image.src = obj.src;
    image.alt = obj.alt;
    image.className = "animate-image";
    max_image.getElementsByTagName("p")[0].innerHTML = obj.alt;
}

if (maxImage)
    document.getElementById("nav_g").style.zIndex = "0";

function closeImage() {
    
    document.getElementById("max_image").style.display = "none";
    document.querySelectorAll("#max_image img")[0].className = "";
}

document.addEventListener('DOMContentLoaded', () => {
    // Select the menu icon and navbar
    const menuIcon = document.querySelector('#aft-menu-icon');
    const navbar = document.querySelector('.nav_g');

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
    
}
)