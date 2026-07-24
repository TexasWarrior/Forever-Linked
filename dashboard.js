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
/*====================================
            SALES CHART
====================================*/

const salesChart = new Chart(

document.getElementById("salesChart"),

{

type:"line",

data:{

labels:[
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul"
],

datasets:[{

label:"Revenue",

data:[
1200,
1800,
2500,
3100,
4200,
5600,
7245
],

borderColor:"#2B8A86",

backgroundColor:"rgba(43,138,134,.15)",

fill:true,

tension:.35

}]

},

options:{

responsive:true,

plugins:{

legend:{
display:false
}

}

}

});


/*====================================
        PRODUCT CHART
====================================*/

const productChart = new Chart(

document.getElementById("productChart"),

{

type:"doughnut",

data:{

labels:[
"Bracelets",
"Anklets",
"Charms",
"Private Parties"
],

datasets:[{

data:[
45,
20,
25,
10
],

backgroundColor:[

"#C56C3B",

"#2B8A86",

"#D5B26B",

"#7A5C46"

]

}]

},

options:{

responsive:true,

plugins:{

legend:{

position:"bottom"

}

}

}

});
