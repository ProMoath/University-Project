const menuIcon = document.querySelector('#aft-menu-icon');

window.onscroll = function () {
    const navbar = document.getElementsByTagName("nav")[0];
    const links = navbar.getElementsByTagName("a");
    const bar = document.getElementById("aft-menu-icon");

    if (!navbar || !bar)
        return;

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.style.backgroundColor = "var(--textcolor)";
        bar.style.color = "var(--AFTColor)";
        for (let link of links)
            link.style.color = " var(--AFTColor)";
        //navbar.className="animate-top"
        navbar.classList.add("animate-top");
    }
    else {
        navbar.style.backgroundColor = " var(--AFTColor)";
        bar.style.color = "var(--textcolor)"
        for (let link of links) {
            link.style.color = "var(--textcolor)";
            //navbar.className=""
            navbar.classList.remove("animate-top");
        }
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

    
    if (menuIcon)
        menuIcon.style.display = "none";
}



function closeImage() {
    
    document.getElementById("max_image").style.display = "none";
    document.querySelectorAll("#max_image img")[0].className = "";
    if (menuIcon)
        menuIcon.style.display = "block";
}

document.addEventListener('DOMContentLoaded', () => {
    // Select the menu icon and navbar
    const navbar = document.querySelector('.nav_g');

    // Check if the elements exist
    if (menuIcon && navbar) {
        // Add a click event to the menu icon
        menuIcon.addEventListener('click', () => {
            // Toggle classes for the menu icon and navbar
            menuIcon.classList.toggle('fa-times'); // Change to "X" icon when active
            menuIcon.classList.toggle('fa-bars'); //  Change to "bar" icon when active  
            navbar.classList.toggle('active');    // Show or hide the menu
        });
  } 
  else {
        console.error('Menu icon or navbar not found in the DOM.');
    }
    
}
)