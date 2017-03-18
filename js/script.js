// search-------------------------------------------------------------------
$(document).ready(function(){
  $(".form-control").change(function(){
    $(".wrapper>div").removeClass("active-user");
    var nameInput = $(this).val().toLowerCase(); 
    var userFirstName = $(".first-name");
    console.log(nameInput);
    console.log(userFirstName);

    $(userFirstName).each(function(index,data) {
      console.log(data);
      if(nameInput === $(data).text()){
        $(".user" + (index+1)).addClass("active-user");
      }
    // console.log('Порядковый номер: ' + index + ' ; Содержимое: ' +$(data).text());
    });
  })
});

// randomuser API-----------------------------------------------------------
var userNumbers = prompt("How many users you want to display?", "");
$.ajax({
		  url: 'https://randomuser.me/api/?results=' + userNumbers,
		  dataType: 'json',
		  success: function(data) {
    		console.log(data);
        $(data.results).each(function(index,value){
          $(".wrapper").append('<div class="row user' + (index+1) + ' accordeon"><div class="col-sm-1 photo"></div><div class="col-sm-2 last-name"></div><div class="col-sm-2 first-name"></div><div class="col-sm-2 username"></div><div class="col-sm-2 phone"></div><div class="col-sm-2 location"></div><div class="col-sm-1"><i class="fa fa-plus fa-2x plus-minus"></i></div></div><div class="row content"><div class="col-sm-3"></div><div class="col-sm-3"></div><div class="col-sm-3"></div><div class="col-sm-3"></div></div>');
          console.log(value);
          $(".user" + (index+1) + " .photo").html('<img src="' + data.results[index].picture.thumbnail + '"class="img-circle" alt="medium_photo">');
          $(".user" + (index+1) + " .last-name").html(data.results[index].name.last);
          $(".user" + (index+1) + " .first-name").html(data.results[index].name.first);
          $(".user" + (index+1) + " .username").html(data.results[index].login.username);
          $(".user" + (index+1) + " .phone").html(data.results[index].phone);
          $(".user" + (index+1) + " .location").html(data.results[index].location.state);
          $(".user" + (index+1) + "+.content div:first-child").html('<h2>' + data.results[index].name.first + '</h2><i class="fa fa-2x fa-' + data.results[index].gender + '"></i><p><strong>Username </strong>' + data.results[index].login.username + '</p><p><strong>Registered </strong>' + data.results[index].registered + '</p><p><strong>Email </strong>' + data.results[index].email + '</p>');
          $(".user" + (index+1) + "+.content div:nth-child(2)").html('<p><strong>Adress </strong>' + data.results[index].location.street + '</p></p><strong>City </strong>' + data.results[index].location.city + '</p><p><strong>Zip Code </strong>' + data.results[index].location.postcode + '</p>');
          $(".user" + (index+1) + "+.content div:nth-child(3)").html('<p><strong>Birthday </strong>' + data.results[index].dob + '</p><p><strong>Phone </strong>' + data.results[index].phone + '</p><p><strong>Cell </strong>' + data.results[index].cell + '</p>');
          $(".user" + (index+1) + "+.content div:nth-child(4)").html('<img src="' + data.results[index].picture.large + '" class="img-circle" alt="large_photo">');
        });

        // accordeon-------------------------------------------------------------
        $(".wrapper>.content").hide();
        $(".wrapper>.accordeon").on("click",function(){
          var getContent = $(this).next(".content");

          if (getContent.is(":visible")){
            getContent.slideUp(300);
            $(".plus-minus").removeClass("fa-minus").addClass("fa-plus");
          } else {
            $(".wrapper>.content").slideUp(300);
            getContent.slideDown(300);
            $(".plus-minus").removeClass("fa-minus").addClass("fa-plus");
            $(this).find(".plus-minus").removeClass("fa-plus").addClass("fa-minus");
            }
        });
        // chart------------------------------------------------------------------
   			var arr = data.results;
   			var manCounter = 0;
   			var femaleCounter = 0;

   			$.each(arr,function(index,value){
   				$.each(value,function(index,value){
   					if(value === "male"){
   						manCounter = manCounter + 1;
   					}
   					if(value === "female"){
   						femaleCounter = femaleCounter + 1;
   					}
   				})
   			});
			google.charts.load('current', {'packages':['corechart']});
			google.charts.setOnLoadCallback(drawChart);

			function drawChart(){
				var data = new google.visualization.DataTable();
				data.addColumn('string', 'Gender');
				data.addColumn('number', 'Persentage');
				data.addRows([
					['Male', manCounter],
					['Female', femaleCounter]
					]);
				var option = {'title':'Gender users',
					'width': 500,
					'height':500};
			var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
			chart.draw(data, option);			
			};
  	}
});

