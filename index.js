var currect_data = new Date();
var my_date = new Date( (d + '-' + (currect_data.getFullYear()+1)) );
var dayZ = Math.abs ( (( Date.parse(my_date) -
Date.parse(currect_data))/(1000*3600*24)) %365);
var result = dayZ.toFixed(0);
