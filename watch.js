    var h;
	var min;
	var sec;
function watch()
{
	var date = new Date();
	 h = date.getHours();
	 min = date.getMinutes();
	 sec = date.getSeconds();
	if(h < 10) h = "0" + h + "";
 	if(min < 10) min = "0" + min + "";
	if(sec < 10) sec = "0" + sec + "";
	document.getElementById("watch").innerHTML = h + ":" + min + ":" +sec;
	setTimeout("watch()", 1000)
}
window.onload=watch;
