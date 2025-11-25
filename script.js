// change from hamburger to an X icon
function myFunction(x) {
            x.classList.toggle("change");
        }

// "pulls out" side nav bar and closes
function togglenav() {
    const sidenav = document.getElementById("sidenavbar");
    const navicon = document.getElementById("navicon");

    // if it is open, close it
    if (sidenav.style.width == "250px") {
        sidenav.style.width = "0";
        navicon.style.right = "60px";
    } 
    else {
        sidenav.style.width = "250px";
        navicon.style.right = "310px";
    }
}