
    


    
    
    var x = window.location;
    var y = x.href;

    var arr = y.split('/');

    for (i = 0; i < arr.length; i++) {
        if (arr[i] == 'map.html') {
            url = 'map.html';
        } else if (arr[i] == 'timer.html') {
            url = 'timer.html';
        } else if (arr[i] == 'resume.html') {
            url = 'resume.html';
        } else {
            url = 'resume.html';
        }
    }
    
    var urlStr = 'div[href="' + url + '"]';
  
    $('.nBtn').parent().removeClass('myNavActive');
    $(urlStr).parent().addClass('myNavActive');
    
