var target;
var old;
$('td').on("mouseover",function() {
	console.log('mouseover');
	old = '';
	target = $(this);
	if (isInt(target.text())) {
		old = target.text();
	    $(document).bind("keydown",function(e) {
	        if(e.shiftKey) {
				timestamp = old*1000; // seconds * 1000 for milliseconds
				if (isValid(timestamp)) {
					// var zone = new Date().toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2];
					var fulldate = new Date(timestamp);
					// if will be used in future version where you can select timezone (UTC or current browser timezone)
					// currently always uses current browser timezone
					if (false) {
						var day = fulldate.getUTCDate();
						var month = fulldate.getUTCMonth(); // return 0-11
						var year = fulldate.getUTCFullYear();
						var hours = fulldate.getUTCHours(); //returns 0-23
						var minutes = fulldate.getUTCMinutes(); //returns 0-59
						var seconds = fulldate.getUTCSeconds();
						var result = year+'-'+pad((month+1), 2)+'-'+pad(day, 2)+' '+pad(hours, 2)+':'+pad(minutes, 2)+':'+pad(seconds, 2) + ' (UTC)'; 
					} else {
						var day = fulldate.getDate();
						var month = fulldate.getMonth(); // return 0-11
						var year = fulldate.getFullYear();
						var hours = fulldate.getHours(); //returns 0-23
						var minutes = fulldate.getMinutes(); //returns 0-59
						var seconds = fulldate.getSeconds();
						var result = year+'-'+pad((month+1), 2)+'-'+pad(day, 2)+' '+pad(hours, 2)+':'+pad(minutes, 2)+':'+pad(seconds, 2);
						// result += ' ('+zone+')'; 
					}
				} else {
					result = 'Invalid timestamp';
				}
				target.html(result);	
	        }
	    });
	} 
}).on("mouseout",function()
{
	console.log('mouseout');
    // $(document).unbind("keydown");
    if (old) {
		target.html(old);		    	
    }
});
function isValid(dateString) {
    var minDate = new Date('1970-01-01 00:00:01');
    var maxDate = new Date('2038-01-19 03:14:07');
    var date = new Date(dateString);
    return date > minDate && date < maxDate;
}
function isInt(value) {
  return !isNaN(value) && 
        parseInt(Number(value)) == value && 
        !isNaN(parseInt(value, 10));
}
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}