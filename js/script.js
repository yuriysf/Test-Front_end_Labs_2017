// accordeon-------------------------------------------------------------
$(document).ready(function(){
	$(".wrapper>.content").hide();
	$(".wrapper>.accordeon").click(function(){
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
	})
});

// search-------------------------------------------------------------------
/*function findFirstName(value){
  var name = document.getElementsByClassName('.first-name').value;
  console.log(name);
  if(value === name){
    alert("User " + value + " is founded");
  }
  alert("User " + value + " is not founded");
}*/
$(document).ready(function(){
  $(".form-control").change(function(){
    var nameInput = $(".form-control").val(); 
    if($(".first-name").val()===nameInput){
      alert("ok")};
  })
})
// randomiser API-----------------------------------------------------------
$.ajax({
		  url: 'https://randomuser.me/api/?results=7',
		  dataType: 'json',
		  success: function(data) {
    		console.log(data);
    		$('.user1 .photo').html('<img src="' + data.results['0'].picture.thumbnail + '"class="img-circle" alt="medium_photo">');
    		$('.user1 .last-name').html(data.results['0'].name.last);
    		$('.user1 .first-name').html(data.results['0'].name.first);
   			$('.user1 .username').html(data.results['0'].login.username);
   			$('.user1 .phone').html(data.results['0'].phone);
   			$('.user1 .location').html(data.results['0'].location.state);
   			$('.user1+.content div:first-child').html('<h2>' + data.results['0'].name.first + '</h2><i class="fa fa-2x fa-' + data.results["0"].gender + '"></i><p><strong>Username </strong>' + data.results['0'].login.username + '</p><p><strong>Registered </strong>' + data.results['0'].registered + '</p><p><strong>Email </strong>' + data.results['0'].email + '</p>');
   			$('.user1+.content div:nth-child(2)').html('<p><strong>Adress </strong>' + data.results['0'].location.street + '</p></p><strong>City </strong>' + data.results['0'].location.city + '</p><p><strong>Zip Code </strong>' + data.results['0'].location.postcode + '</p>');
   			$('.user1+.content div:nth-child(3)').html('<p><strong>Birthday </strong>' + data.results['0'].dob + '</p><p><strong>Phone </strong>' + data.results['0'].phone + '</p><p><strong>Cell </strong>' + data.results['0'].cell + '</p>');
   			$('.user1+.content div:nth-child(4)').html('<img src="' + data.results['0'].picture.large + '" class="img-circle" alt="large_photo">');
 
   			$('.user2 .photo').html('<img src="' + data.results['1'].picture.thumbnail + '"class="img-circle" alt="icon">');
   			$('.user2 .last-name').html(data.results['1'].name.last);
    		$('.user2 .first-name').html(data.results['1'].name.first);
   			$('.user2 .username').html(data.results['1'].login.username);
   			$('.user2 .phone').html(data.results['1'].phone);
   			$('.user2 .location').html(data.results['1'].location.state);
   			$('.user2+.content div:first-child').html('<h2>' + data.results['1'].name.first + '</h2><i class="fa fa-2x fa-' + data.results["1"].gender + '"></i><p><strong>Username </strong>' + data.results['1'].login.username + '</p><p><strong>Registered </strong>' + data.results['1'].registered + '</p><p><strong>Email </strong>' + data.results['1'].email + '</p>');
   			$('.user2+.content div:nth-child(2)').html('<p><strong>Adress </strong>' + data.results['1'].location.street + '</p></p><strong>City </strong>' + data.results['1'].location.city + '</p><p><strong>Zip Code </strong>' + data.results['1'].location.postcode + '</p>');
   			$('.user2+.content div:nth-child(3)').html('<p><strong>Birthday </strong>' + data.results['1'].dob + '</p><p><strong>Phone </strong>' + data.results['1'].phone + '</p><p><strong>Cell </strong>' + data.results['1'].cell + '</p>');
   			$('.user2+.content div:nth-child(4)').html('<img src="' + data.results['1'].picture.large + '" class="img-circle" alt="large_photo">');

   			$('.user3 .photo').html('<img src="' + data.results['2'].picture.thumbnail + '"class="img-circle" alt="icon">');
   			$('.user3 .last-name').html(data.results['2'].name.last);
    		$('.user3 .first-name').html(data.results['2'].name.first);
   			$('.user3 .username').html(data.results['2'].login.username);
   			$('.user3 .phone').html(data.results['2'].phone);
   			$('.user3 .location').html(data.results['2'].location.state);
   			$('.user3+.content div:first-child').html('<h2>' + data.results['2'].name.first + '</h2><i class="fa fa-2x fa-' + data.results["2"].gender + '"></i><p><strong>Username </strong>' + data.results['2'].login.username + '</p><p><strong>Registered </strong>' + data.results['2'].registered + '</p><p><strong>Email </strong>' + data.results['2'].email + '</p>');
   			$('.user3+.content div:nth-child(2)').html('<p><strong>Adress </strong>' + data.results['2'].location.street + '</p></p><strong>City </strong>' + data.results['2'].location.city + '</p><p><strong>Zip Code </strong>' + data.results['2'].location.postcode + '</p>');
   			$('.user3+.content div:nth-child(3)').html('<p><strong>Birthday </strong>' + data.results['2'].dob + '</p><p><strong>Phone </strong>' + data.results['2'].phone + '</p><p><strong>Cell </strong>' + data.results['2'].cell + '</p>');
   			$('.user3+.content div:nth-child(4)').html('<img src="' + data.results['2'].picture.large + '" class="img-circle" alt="large_photo">');

   			$('.user4 .photo').html('<img src="' + data.results['3'].picture.thumbnail + '"class="img-circle" alt="icon">');
   			$('.user4 .last-name').html(data.results['3'].name.last);
    		$('.user4 .first-name').html(data.results['3'].name.first);
   			$('.user4 .username').html(data.results['3'].login.username);
   			$('.user4 .phone').html(data.results['3'].phone);
   			$('.user4 .location').html(data.results['3'].location.state);
   			$('.user4+.content div:first-child').html('<h2>' + data.results['3'].name.first + '</h2><i class="fa fa-2x fa-' + data.results["3"].gender + '"></i><p><strong>Username </strong>' + data.results['3'].login.username + '</p><p><strong>Registered </strong>' + data.results['3'].registered + '</p><p><strong>Email </strong>' + data.results['3'].email + '</p>');
   			$('.user4+.content div:nth-child(2)').html('<p><strong>Adress </strong>' + data.results['3'].location.street + '</p></p><strong>City </strong>' + data.results['3'].location.city + '</p><p><strong>Zip Code </strong>' + data.results['3'].location.postcode + '</p>');
   			$('.user4+.content div:nth-child(3)').html('<p><strong>Birthday </strong>' + data.results['3'].dob + '</p><p><strong>Phone </strong>' + data.results['3'].phone + '</p><p><strong>Cell </strong>' + data.results['3'].cell + '</p>');
   			$('.user4+.content div:nth-child(4)').html('<img src="' + data.results['3'].picture.large + '" class="img-circle" alt="large_photo">');

   			$('.user5 .photo').html('<img src="' + data.results['4'].picture.thumbnail + '"class="img-circle" alt="icon">');
   			$('.user5 .last-name').html(data.results['4'].name.last);
    		$('.user5 .first-name').html(data.results['4'].name.first);
   			$('.user5 .username').html(data.results['4'].login.username);
   			$('.user5 .phone').html(data.results['4'].phone);
   			$('.user5 .location').html(data.results['4'].location.state);
   			$('.user5+.content div:first-child').html('<h2>' + data.results['4'].name.first + '</h2><i class="fa fa-2x fa-' + data.results["4"].gender + '"></i><p><strong>Username </strong>' + data.results['4'].login.username + '</p><p><strong>Registered </strong>' + data.results['4'].registered + '</p><p><strong>Email </strong>' + data.results['4'].email + '</p>');
   			$('.user5+.content div:nth-child(2)').html('<p><strong>Adress </strong>' + data.results['4'].location.street + '</p></p><strong>City </strong>' + data.results['4'].location.city + '</p><p><strong>Zip Code </strong>' + data.results['4'].location.postcode + '</p>');
   			$('.user5+.content div:nth-child(3)').html('<p><strong>Birthday </strong>' + data.results['4'].dob + '</p><p><strong>Phone </strong>' + data.results['4'].phone + '</p><p><strong>Cell </strong>' + data.results['4'].cell + '</p>');
   			$('.user5+.content div:nth-child(4)').html('<img src="' + data.results['4'].picture.large + '" class="img-circle" alt="large_photo">');

   			$('.user6 .photo').html('<img src="' + data.results['5'].picture.thumbnail + '"class="img-circle" alt="icon">');
   			$('.user6 .last-name').html(data.results['5'].name.last);
    		$('.user6 .first-name').html(data.results['5'].name.first);
   			$('.user6 .username').html(data.results['5'].login.username);
   			$('.user6 .phone').html(data.results['5'].phone);
   			$('.user6 .location').html(data.results['5'].location.state);
   			$('.user6+.content div:first-child').html('<h2>' + data.results['5'].name.first + '</h2><i class="fa fa-2x fa-' + data.results["5"].gender + '"></i><p><strong>Username </strong>' + data.results['5'].login.username + '</p><p><strong>Registered </strong>' + data.results['5'].registered + '</p><p><strong>Email </strong>' + data.results['5'].email + '</p>');
   			$('.user6+.content div:nth-child(2)').html('<p><strong>Adress </strong>' + data.results['5'].location.street + '</p></p><strong>City </strong>' + data.results['5'].location.city + '</p><p><strong>Zip Code </strong>' + data.results['5'].location.postcode + '</p>');
   			$('.user6+.content div:nth-child(3)').html('<p><strong>Birthday </strong>' + data.results['5'].dob + '</p><p><strong>Phone </strong>' + data.results['5'].phone + '</p><p><strong>Cell </strong>' + data.results['5'].cell + '</p>');
   			$('.user6+.content div:nth-child(4)').html('<img src="' + data.results['5'].picture.large + '" class="img-circle" alt="large_photo">');

   			$('.user7 .photo').html('<img src="' + data.results['6'].picture.thumbnail + '"class="img-circle" alt="icon">');
   			$('.user7 .last-name').html(data.results['6'].name.last);
    		$('.user7 .first-name').html(data.results['6'].name.first);
   			$('.user7 .username').html(data.results['6'].login.username);
   			$('.user7 .phone').html(data.results['6'].phone);
   			$('.user7 .location').html(data.results['6'].location.state);
   			$('.user7+.content div:first-child').html('<h2>' + data.results['6'].name.first + '</h2><i class="fa fa-2x fa-' + data.results["6"].gender + '"></i><p><strong>Username </strong>' + data.results['6'].login.username + '</p><p><strong>Registered </strong>' + data.results['6'].registered + '</p><p><strong>Email </strong>' + data.results['6'].email + '</p>');
   			$('.user7+.content div:nth-child(2)').html('<p><strong>Adress </strong>' + data.results['6'].location.street + '</p></p><strong>City </strong>' + data.results['6'].location.city + '</p><p><strong>Zip Code </strong>' + data.results['6'].location.postcode + '</p>');
   			$('.user7+.content div:nth-child(3)').html('<p><strong>Birthday </strong>' + data.results['6'].dob + '</p><p><strong>Phone </strong>' + data.results['6'].phone + '</p><p><strong>Cell </strong>' + data.results['6'].cell + '</p>');
   			$('.user7+.content div:nth-child(4)').html('<img src="' + data.results['6'].picture.large + '" class="img-circle" alt="large_photo">');


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

