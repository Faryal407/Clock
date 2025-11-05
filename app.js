let days = ['sun', 'mon' , 'tues' , 'wed' , 'thurs' , 'fri'  ,'sat' ];
let d = new Date();
let currentDay = days[d.getDay()];
 setInterval(() => {
      document.getElementById('time').textContent = new Date().toLocaleTimeString() + " " + currentDay;
    }, 1000);


