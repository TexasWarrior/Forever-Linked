/*====================================
        FOREVER LINKED DASHBOARD
====================================*/

/* Today's Date */

const today = new Date();

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

const dateElement = document.getElementById("todayDate");

if(dateElement){
    dateElement.textContent =
        today.toLocaleDateString("en-US", options);
}


/*====================================
        SAMPLE SALES DATA
====================================*/

const dashboardData = {

    todaySales: 385,

    monthSales: 7245,

    appointments: 6,

    inventoryAlerts: 2

};


/*====================================
        UPDATE DASHBOARD CARDS
====================================*/

document.getElementById("todaySales").textContent =
"$" + dashboardData.todaySales;

document.getElementById("monthSales").textContent =
"$" + dashboardData.monthSales;

document.getElementById("appointments").textContent =
dashboardData.appointments;

document.getElementById("inventoryAlerts").textContent =
dashboardData.inventoryAlerts;


/*====================================
        INVENTORY ALERT
====================================*/

if(dashboardData.inventoryAlerts > 0){

    console.log(
        "Inventory is getting low."
    );

}


/*====================================
        WELCOME MESSAGE
====================================*/

console.log(
"Forever Linked Dashboard Loaded Successfully!"
);
