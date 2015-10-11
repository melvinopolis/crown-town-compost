$(document).ready(function(){
	//click to change countdown numbers
	var $number = $('.countdown .number');
	var $countdownText = $('.countdown .countdown-text');
	var $red = '#e64c3b'

	$number.on('click', function(){
		if ($number.html() === '7') {
			$number.html('6').css({
				'border': '4px solid' + $red
			});
		} else if ($number.html() === '6') {
			$number.html('5').css({
				'border': '6px solid' + $red
			});
		} else if ($number.html() === '5') {
			$number.html('4').css({
				'border': '8px solid' + $red
			});
		} else if ($number.html() === '4') {
			$number.html('3').css({
				'border': '10px solid' + $red
			});
		} else if ($number.html() === '3') {
			$number.html('2').css({
				'border': '12px solid' + $red
			});
		} else if ($number.html() === '2') {
			$number.html('1').css({
				'background-color': $red
			});
			$countdownText.html('DAY UNTIL PICK-UP');

			if ($pickupCancelled.css('display', 'none')) {
				$cancelNotAvailable.css('display', 'block');
				$cancelPickup.css('display', 'none');
			} 
		}
	})

	// toggle to cancel pickup
	var $cancelPickup = $('.weekly-options .cancel-pickup');
	var $pickupCancelled = $('.weekly-options .pickup-cancelled');
	var $cancelNotAvailable = $('.weekly-options .cancel-not-available');

	$cancelPickup.on('click', function(){
		$cancelPickup.css('display', 'none');
		$pickupCancelled.css('display', 'block');
	});

	$pickupCancelled.on('click', function(){
		$pickupCancelled.css('display', 'none');
		$cancelPickup.css('display', 'block');
	});

	// toggle pickup location
	$('.bucket-button').on('click', function(){
		$('.bucket-button').toggleClass('active');
		$('.bucket-button span').toggleClass('hidden');
	});

	// toggle yard sign
	$('.sign-button').on('click', function(){
		$('.sign-button').toggleClass('active');
		$('.sign-button span').toggleClass('hidden');
	});

	// toggle supplies needed
	$('.supply-button').on('click', function(){
		$(this).toggleClass('active');
		$(this).children('span').toggleClass('hidden');
	});

	//toggle monthly or annual payment
	$('.plan-options .plan-button').on('click', function(){
		$('.plan-options .plan-button').toggleClass('active');
		$('.plan-options .plan-button span').toggleClass('hidden');
	});

	//toggle number of buckets
	$('.plan-options .bucket-plan-button').on('click', function(){
		$('.plan-options .bucket-plan-button').toggleClass('active');
		$('.plan-options .bucket-plan-button span').toggleClass('hidden');
	});

	$('.contact-icons div').on('click', function(){
		$('.contact-icons div i').removeClass('active-icon');
		$(this).children('i').addClass('active-icon');

		if ($(this).hasClass('call')) {
			$('.info-header .call').slideToggle();
			$('.info-header .call').siblings().hide('slow');
		} else if ($(this).hasClass('email')) {
			$('.info-header .email').slideToggle();
			$('.info-header .email').siblings().hide('slow');
		} else if ($(this).hasClass('search')) {
			$('.info-header .search').slideToggle();
			$('.info-header .search').siblings().hide('slow');
		}
	});














});