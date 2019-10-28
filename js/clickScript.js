$('document').ready(function () {

	getContent();

	function getContent() {
		//console.log('getcontent');
		var x = window.location;
		var y = x.href;
		//console.log(x.href);
		var arr = y.split('/');
		//console.log(arr);
		for (i = 0; i < arr.length; i++) {
			if (arr[i] == 'map.html') {
				url = 'ajax/map.html';
			} else if (arr[i] == 'timer.html') {
				url = 'ajax/timer.html';
			} else if (arr[i] == 'resume.html') {
				url = 'ajax/resume.html';
			} else {
				url = 'ajax/resume.html';
			}
		}
		//console.log(url);

		$.ajax({
			url: url,
			success: function(data){
				
				$('#content').html(data);
				
				
				//var per = $('div').filter('#contentLoad');
				//$('#content').html(per);
			}
		});
		
		//var per = $('#content').filter('#contentLoad');
		
		
		/*$.get(url, getData )
			function getData (data) {

			//console.log(data);

			/* Updating Content on Page*/
			
			/*var dataArr = data.split('\n');
			
			for(i=0; i < dataArr.length; i++){
				if(dataArr[i] == "<div class=\"contentLoad\">"){
					console.log('asdasdasd');
				}
			}*/
			/*var str = data;
			var target = "<div class=\"contentLoad\">";
			var pos = 0;
			
			while(true){
				var foundPos = str.indexOf(target, pos);
				if (foundPos ==-1) break;
			}
			alert( foundPos );
			console.log(data);
			*/
			
			/*
			var data2 = $(data).find('#contentLoad');
			//alert(data2);
				console.log(data2);
			$('#content').html(data2);
			
			

		};*/
	}

	$('.nBtn').on('click', function (e) {
		//console.log('click');

		var href = $(this).attr('href');



		var stateData = {
			"location": href
		}

		/* Add History Entry using pushState */
		history.pushState(stateData, null, href);

		getContent();

		$('.nBtn').parent().removeClass('myNavActive');
		$(this).parent().addClass('myNavActive');

	});

	/* Adding popstate event listener to handle browser back button  */
	window.addEventListener("popstate", function (e) {

		/* Update Content */
		getContent(location.pathname, false);
		$('.nBtn').parent().removeClass('myNavActive');
		$('div[href="' + e.state.location + '"]').parent().addClass('myNavActive');

	});
});
