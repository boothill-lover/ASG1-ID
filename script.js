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

// purchase button function
function purchase(btn) {
    const date = btn.dataset.date;
    const location = btn.dataset.location;

    window.location.href = `purchase.html?date=${encodeURIComponent(date)}&location=${encodeURIComponent(location)}`;
}

// if on purchase page, change the date and location text
if (window.location.pathname.includes("purchase.html")) {

    const params = new URLSearchParams(window.location.search);

    const date = params.get("date");
    const location = params.get("location");

    document.getElementById("dt").textContent = date;
    document.getElementById("loc").textContent = location;
}

// when pressing buy ticket, alert ok!
function alertPurchase() {
    alert("Ticket Purchased! Thank you for your purchase.");
    window.location.href = "index.html";
}

// ticket summary
const qtyInput = document.getElementById('qty');
const summaryDesc = document.querySelector('.summarydesc');
const totalSpan = document.querySelector('.total span');
const ticketmainSpan = document.querySelector('.ticketmain span');

const ticketPrice = 230;
const bookingFee = 6;

// Set default quantity
qtyInput.value = 1;

function updateSummary() {
    let qty = parseInt(qtyInput.value);

    // qty cannot be <1
    if (isNaN(qty)) {
        qty = 1;
    }

    if (qty < 1) {
        qty = 1;
        qtyInput.value = 1;
    }

    const ticketsTotal = ticketPrice * qty;
    const total = ticketsTotal + bookingFee;

    summaryDesc.textContent = `$${ticketPrice} x${qty}`;
    totalSpan.textContent = `$${total}`;
    ticketmainSpan.textContent = `$${ticketsTotal}`;
}

// Update in real-time
qtyInput.addEventListener('input', updateSummary);

// Initial update
updateSummary();