var ms = new Date();
var time = ms.getTime();
var str = 'timer = ' + time + '; path=/; domain=dz/index;';

if(sessionStorage.getItem('timer')){
    //alert('sessionStorage');
    $.cookie('timer', sessionStorage.getItem('timer'))
} else {
    $.cookie('timer', time);
    sessionStorage.setItem('timer', time);
}




if ($.cookie('timer') != undefined)
	{
		
	} else {$.cookie('timer', time);}


window.onbeforeunload = function() {
  
	$.cookie('timer', null);
}

