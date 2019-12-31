function timeLeft() {
	var date = new Date();
	var endDate = new Date(2020,0,30,23,13);
	var secondsLeft = (endDate - date)/1000;
	if (secondsLeft > 0) {
		var minutesLeft = secondsLeft/60;
		var hoursLeft = minutesLeft/60;
		var daysLeft = hoursLeft/24;
		hoursLeft = (daysLeft - Math.floor(daysLeft))*24;
		minutesLeft = (hoursLeft - Math.floor(hoursLeft))*60;
		secondsLeft = (minutesLeft - Math.floor(minutesLeft))*60;
		$('#timer').html(Math.floor(daysLeft) + 'd : ' + Math.floor(hoursLeft) + 'h : ' + Math.floor(minutesLeft) + 'm : ' + Math.floor(secondsLeft) + 's');
		$('#timer1').html(Math.floor(daysLeft) + 'd : ' + Math.floor(hoursLeft) + 'h : ' + Math.floor(minutesLeft) + 'm : ' + Math.floor(secondsLeft) + 's');
	}
	else {$('#timer').html('timer has gone')}
	timer();
};
function timer () {
    setTimeout(timeLeft, 1000);
}
timer()

$('#numberCard').on('change', function () {
	var cardReg = /[0-9]/;
	var cardRegLet = /[a-zA-Z]/;
	if (!($('#numberCard').val().match(cardReg)) || $('#numberCard').val().match(cardRegLet)) {
		$(this).next().attr('src', 'img/Group 12824.svg');
		$('#numberCard').css('border', '1px solid #E24C2C');
	}
	else {
		$(this).next().attr('src', 'img/Group 12806.svg');
		$('#numberCard').css('border', '1px solid #2F7E74')
	}
})

$('#firstName').on('change', function () {
	var nameRegLet = /[a-zA-Z]/;
	if (!$('#firstName').val().match(nameRegLet)) {
		$(this).next().attr('src', 'img/Group 12824.svg');
		$('#firstName').css('border', '1px solid #E24C2C');
	}
	else {
		$(this).next().attr('src', 'img/Group 12806.svg');
		$('#firstName').css('border', '1px solid #2F7E74')
	}
})

$('#secondName').on('change', function () {
	var nameRegLet = /[a-zA-Z]/;
	if (!$('#secondName').val().match(nameRegLet)) {
		$(this).next().attr('src', 'img/Group 12824.svg');
		$('#secondName').css('border', '1px solid #E24C2C');
	}
	else {
		$(this).next().attr('src', 'img/Group 12806.svg');
		$('#secondName').css('border', '1px solid #2F7E74')
	}
})

$('select').on('change', function () {
	if ($('#selectMonth option:selected').val() == '' || $('#selectYear option:selected').val() == '') {
		$('#selectYear').next().attr('src', 'img/Group 12824.svg');
	}
	else {
		$('#selectYear').next().attr('src', 'img/Group 12806.svg');
	}
	if ($(this).val() == '') {
		$(this).css('border', '1px solid #E24C2C');
	}
	else {
		$(this).css('border', '1px solid #2F7E74');
	}
})