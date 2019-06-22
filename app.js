
// Alert Box

const alert = document.querySelector('.alert');
const btn = document.querySelector('.close-btn');
const badge = document.querySelector('.badge');

btn.addEventListener('click', () => {
	alert.style.display = 'none';
	badge.style.display = 'none';
});

// Traffic Line Chart
const trafficChart = document.getElementById('traffic-chart');
let trafficData = new Chart(trafficChart, {
	type: 'line',
	data: {
		labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
		datasets: [{
			label: 'Hourly',
			data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
			backgroundColor: [
                'rgba(236, 236, 156, 0.6)',
                'rgba(160, 236, 160, 0.6)',
                'rgba(236, 160, 165, 0.6)',
                'rgba(236, 236, 156, 0.6)',
                'rgba(236, 236, 156, 0.6)',
                'rgba(160, 236, 160, 0.6)',
                'rgba(236, 160, 165, 0.6)'
			],
			borderColor: [
				'rgba(33, 156, 60, 0.884)'
			],
			borderWidth: 1, 
		},
			{
			label: 'Daily',
			data: [550, 1350, 1200, 1000, 1300, 1250, 1750, 1450, 1250, 1400, 2300],
			hidden: true,
			backgroundColor: [
                'rgba(236, 160, 165, 0.6)',

			],
			borderColor: [
				'rgba(33, 156, 60, 0.884)'
			],
			borderWidth: 1, 
		},
			{
			label: 'Weekly',
			data: [730, 1220, 1030, 1200, 1600, 1140, 1190, 1800, 2500, 1100, 2100],
			hidden: true,
			backgroundColor: [
                'rgba(160, 236, 160, 0.6)',

			],
			borderColor: [
				'rgba(33, 156, 60, 0.884)'
			],
			borderWidth: 1, 
		},
			{
			label: 'Monthly',
			data: [150, 1050, 1700, 1700, 1250, 1350, 1300, 1550, 2250, 1700, 2400],
			hidden: true,
			backgroundColor: [
                'rgba(150, 250, 300, 0.6)',
                'rgba(160, 236, 160, 0.6)',
                'rgba(236, 160, 165, 0.6)',
                'rgba(236, 236, 156, 0.6)',
                'rgba(236, 236, 156, 0.6)',
                'rgba(160, 236, 160, 0.6)',
                'rgba(236, 160, 165, 0.6)'
			],
			borderColor: [
				'rgba(33, 156, 60, 0.884)'
			],
			borderWidth: 1, 
		}
]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
                }
            }]
        },
		legend: {
			display: true
		}
    }
});

// Daily Traffic Bar Chart

const dailyTraffic = document.getElementById('daily-chart');
const dailyData = new Chart(dailyTraffic, {
	type: 'bar',
	data: {
		labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
		datasets: [{
			label: '',
			data: [75, 115, 157, 125, 225, 200, 100],
			backgroundColor: [
                'rgba(236, 236, 156, 0.6)',
                'rgba(160, 236, 160, 0.6)',
                'rgba(236, 160, 165, 0.6)',
                'rgba(236, 236, 156, 0.6)',
                'rgba(236, 236, 156, 0.6)',
                'rgba(160, 236, 160, 0.6)',
                'rgba(236, 160, 165, 0.6)'
			],
			borderColor: [
                'rgba(33, 156, 60, 0.884)',
                'rgba(33, 156, 60, 0.884)',
                'rgba(33, 156, 60, 0.884)',
                'rgba(33, 156, 60, 0.884)',
                'rgba(33, 156, 60, 0.884)',
                'rgba(33, 156, 60, 0.884)',
                'rgba(33, 156, 60, 0.884)',

			],
			borderWidth: 1, 
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
                }
            }]
        },
		legend: {
			display: false
		}
    }
});

// Doughnut Chart

const mobileTraffic = document.getElementById('mobile-chart');
const mobileData = new Chart(mobileTraffic, {
	type: 'doughnut',
	data: {
		labels: ['Phones', 'Tablets', 'Desktops'],
		datasets: [{
			label: '',
			data: [75, 115, 157],
			backgroundColor: [
                'rgba(236, 236, 156, 0.6)',
                'rgba(160, 236, 160, 0.6)',
                'rgba(236, 160, 165, 0.6)'
			],
			borderColor: [
                'rgba(33, 156, 60, 0.884)',
                'rgba(33, 156, 60, 0.884)',
                'rgba(33, 156, 60, 0.884)'
			],
			borderWidth: 1, 
		}]
	},
	options: {
			position: 'right',
			labels: {
				boxWidth: 20,
				fontStyle: 'bold',
				padding: 20
			}
    }
});

// Message Field

const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const button = document.getElementById('send');

button.addEventListener('click', () => {
	if (user.value === "" && message.value === "") {
		alert("Please select User and fill out message field before sending")
	} else if (user.value === "") {
		alert("Please select User then resend the message")
	} else if (message.value === "") {
		alert("Please fill out the message field before sending")
	} else {
		alert("Message has been successfully sent")
		location.reload(true);
	}
});