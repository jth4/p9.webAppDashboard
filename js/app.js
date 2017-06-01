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


// Charts

// ===================
// Visitors Chart
// ===================

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

// ===================
// Daily Traffic Chart
// ===================

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