$( document ).ready(function() {
	var old;
	var stamp;
	$('td').hover(function() {
		var $target = $(this);
		old = $target.text();
		stamp = old.match(/(((-)?)[0-9]{7,14})/g);
		if (stamp)
		{
			var fulldate = new Date(stamp[0]*1000);
			var day = fulldate.getDate();
			var month = fulldate.getMonth();
			var year = fulldate.getFullYear();
			var hours = fulldate.getHours(); //returns 0-23
			var minutes = fulldate.getMinutes(); //returns 0-59
			var seconds = fulldate.getSeconds()
			var nicedate = day+'-'+month+'-'+year+' '+hours+':'+minutes+':'+seconds; 
		    $(this).html(nicedate);
		}
	    $target.html(nicedate);
	},
	function() {
		if (stamp)
		{
			var $target = $(this);
			$target.html(old);
		}
	});
});

