/*==================================================
        FOREVER LINKED DASHBOARD
        dashboard.js
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeDashboard();

});

/*==================================================
        INITIALIZE DASHBOARD
==================================================*/

function initializeDashboard(){

    updateGreeting();
    updateDate();

}

/*==================================================
        GREETING
==================================================*/

function updateGreeting(){

    const hour = new Date().getHours();

    let greeting = "Welcome";

    if(hour < 12){

        greeting = "Good Morning";

    }

    else if(hour < 18){

        greeting = "Good Afternoon";

    }

    else{

        greeting = "Good Evening";

    }

    const title = document.querySelector(".header-left h1");

    if(title){

        title.innerHTML = `${greeting}, Kylie 👋`;

    }

}

/*==================================================
        TODAY'S DATE
==================================================*/

function updateDate(){

    const today = new Date();

    const options = {

        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"

    };

    const formattedDate = today.toLocaleDateString("en-US", options);

    const dateElement = document.getElementById("todayDate");

    if(dateElement){

        dateElement.textContent = formattedDate;

    }

}
