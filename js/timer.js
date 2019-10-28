var ms = new Date();
var time = ms.getTime();
//var str = 'timer = ' + time + '; path=/;';



//document.cookie = str;

var c = getCookie("timer");
 //var c = sessionStorage.getItem('timer');

var timerDiv = document.querySelector(".timerDiv");

/* интервал пресчета таймера */
setInterval(function () {
	var nowMs = new Date();
	var nowTime = nowMs.getTime();
	var timer = nowTime - c;
	timerDiv.innerHTML = getYoutubeLikeToDisplay(timer);
}, 1000);

/* функция приобразования миллисекунд */
function getYoutubeLikeToDisplay(millisec) {
        var seconds = (millisec / 1000).toFixed(0);
        var minutes = Math.floor(seconds / 60);
        var hours = "";
        if (minutes > 59) {
            hours = Math.floor(minutes / 60);
            hours = (hours >= 10) ? hours : "0" + hours;
            minutes = minutes - (hours * 60);
            minutes = (minutes >= 10) ? minutes : "0" + minutes;
        }

        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        if (hours != "") {
            return hours + " час. " + minutes + " мин. " + seconds + " сек.";
        }
        return minutes + " мин. " + seconds + " сек.";
    }

/* Работа с куками */
function getCookie(name) {
	var matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
