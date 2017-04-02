javascript:(function(){
	
var timeStamps = document.getElementsByClassName("timestamp");

var hours = 0;
var minutes = 0;
var seconds = 0;

var timeStampsLength = timeStamps.length;

for(var i = 0; i < timeStampsLength; i++){
	var textTime = timeStamps[ i ].getElementsByTagName("span")[0].innerHTML;
	var timeArray = textTime.split(':');
	
	var idx = 0;
	
	if(timeArray.length > 2){
		hours += parseInt( timeArray[ idx ] );
		idx++;
	}
	
	minutes += parseInt( timeArray[ idx ] );
	idx++;
	
	seconds += parseInt( timeArray[ idx ] );
}

minutes += Math.floor(seconds / 60);
seconds = seconds % 60;

hours += Math.floor(minutes / 60);
minutes = minutes % 60;

var ul = document.getElementsByClassName("pl-header-details")[0];
var li = document.createElement("li");
li.appendChild( document.createTextNode("Hours: " + hours + ", minutes: " + minutes + ", seconds: " + seconds) );
ul.appendChild(li);

})();