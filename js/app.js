// ===================
// Bell Notification
// ===================

const bellWrap = document.getElementById('notification-bell')
const bellDot = document.getElementById('bellDot');
const modal = document.getElementById('bellAlerts');
const span = document.getElementsByClassName("close")[0];

bellWrap.addEventListener('click', function() {
	bellDot.style.opacity = 0;	
	modal.style.display = "block";
});

span.addEventListener('click', function() {
    modal.style.display = "none";
});

window.addEventListener('click', function() {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});


// ===================
// Alert
// ===================

const close = document.getElementById('alertClose');

close.addEventListener('click', function () {
	const alert = document.getElementById('alert');
	alert.innerHTML = "You're all caught up!";
	
	function changeAlertStatus(){ 
		alert.className = "noAlerts";}
	
	setTimeout(changeAlertStatus, 500);
});



// ---------------------------------------


	// CHARTS
	

// ---------------------------------------


// ==========/*\==========
// Periodic Visitors Chart
// =======================

trafficWeekly();

let trafficBtnMonthly = document.getElementById('traffic-btn-monthly');
let trafficBtnWeekly = document.getElementById('traffic-btn-weekly');
let trafficBtnDaily = document.getElementById('traffic-btn-daily');
let trafficBtnHourly = document.getElementById('traffic-btn-hourly');


trafficBtnMonthly.addEventListener('click', trafficMonthly);
trafficBtnWeekly.addEventListener( 'click', trafficWeekly );
trafficBtnDaily.addEventListener( 'click' , trafficDaily  );
trafficBtnHourly.addEventListener('click' , trafficHourly );


function trafficMonthly() {

	var ctx = document.getElementById('trafficChart').getContext('2d');
	var chart = new Chart(ctx, {
	    // The type of chart we want to create
	    type: 'line',
	
	    // The data for our dataset
	    data: {
	        labels: ['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'],
	        datasets: [{
	            label: "My First dataset",
	            backgroundColor: 'rgba(65,86,119,.3)',
	            borderColor: '#415677',
	            data: [0, 10, 5, 2, 20, 30, 45, 30, 35, 25, 20, 30, 40],
	        }]
	    },
	
	    // Configuration options go here
	    options: {
	    	legend: {
	    		display: false
	    		}
	    }
	});

};

function trafficWeekly() {
	
	var ctx = document.getElementById('trafficChart').getContext('2d');
	var chart = new Chart(ctx, {
	    // The type of chart we want to create
	    type: 'line',
	
	    // The data for our dataset
	    data: {
	        labels: ['4/20-4/27','4/20-4/27','4/20-4/27','4/20-4/27','4/20-4/27','4/20-4/27','4/20-4/27'],
	        datasets: [{
	            label: "My First dataset",
	            backgroundColor: 'rgba(65,86,119,.3)',
	            borderColor: '#415677',
	            data: [0, 10, 5, 2, 20, 30, 45],
	        }]
	    },
	
	    // Configuration options go here
	    options: {
	    	legend: {
	    		display: false
	    		}
	    }
	});

};

function trafficDaily() {

	var ctx = document.getElementById('trafficChart').getContext('2d');
	var chart = new Chart(ctx, {
	    // The type of chart we want to create
	    type: 'line',
	
	    // The data for our dataset
	    data: {
	        labels: ['M','Tu','W','Th','F','Sa','Su'],
	        datasets: [{
	            label: "My First dataset",
	            backgroundColor: 'rgba(65,86,119,.3)',
	            borderColor: '#415677',
	            data: [20, 30, 15, 11, 11, 15, 12],
	        }]
	    },
	
	    // Configuration options go here
	    options: {
	    	legend: {
	    		display: false
	    		}
	    }
	});

};


function trafficHourly() {

	var ctx = document.getElementById('trafficChart').getContext('2d');
	var chart = new Chart(ctx, {
	    // The type of chart we want to create
	    type: 'line',
	
	    // The data for our dataset
	    data: {
	        labels: ['12a-4a','4a-8a','8a-12p','12p-4p','4p-8p','8p-12a'],
	        datasets: [{
	            label: "My First dataset",
	            backgroundColor: 'rgba(65,86,119,.3)',
	            borderColor: '#415677',
	            data: [17,15,25,35,50,30],
	        }]
	    },
	
	    // Configuration options go here
	    options: {
	    	legend: {
	    		display: false
	    		}
	    }
	});

};


// =========================
// Daily Traffic Chart (bar)
// =========================

var ctx = document.getElementById('dailyTrafficChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["M", "Tu", "W", "Th", "F", "Sa", "Su"],
        datasets: [{
            backgroundColor: '#415677',
            borderColor: '#415677',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {
    	legend: {
    		display: false
    		}
    }
});

// ===================
// Mobile Users Chart
// ===================

var ctx = document.getElementById('mobileUsersChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
            	'rgba(165,86,19,.3)',
            	'rgba(65,186,119,.6)',
            	'rgba(65,86,119,.9)'
            	],
            borderColor: 'rgb(65,86,119)',
            data: [20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {
    	legend: {
    		position: 'right',
    		labels : { boxWidth: 15 }
    	},
    	layout: {
            padding: {
                left: 0,
                right: 70,
                top: 20,
                bottom: 0
            }
        }
    }
});