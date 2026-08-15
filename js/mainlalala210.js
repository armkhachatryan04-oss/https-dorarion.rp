function notif_success(content) {
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: content,
		showConfirmButton: false,
		timer: 2500,
	})
}

function notif_error(content) {
	Swal.fire({
		position: 'center',
		icon: 'error',
		title: content,
		showConfirmButton: false,
		timer: 2500,
	})
}

setTimeout(function () {
	$('.loader>svg').addClass('active')
}, 50)
setTimeout(function () {
	$('.loader').remove()
}, 2000)

function authorization() {
	var formData = $('#authorizationForm').serialize()
	$.ajax({
		type: 'POST',
		url: '/ExtraModules/authorization.php',
		data: formData,
		success: function (response) {
			$('#authorization_info').html(response)
		},
	})
}

function code2faAuth() {
	var formData = $('#code2faAuthForm').serialize()
	$.ajax({
		type: 'POST',
		url: '/ExtraModules/code2faAuthorization.php',
		data: formData,
		success: function (response) {
			$('#authorization_info').html(response)
		},
	})
}

$(function ($) {
	$.ajax({
		blur: 1,
		random: 1,
		transition: 1,
		transition_speed: 800,
	})
})

$(window).on('load', function () {
	$('#loader').fadeOut()
	$('#loader-wrapper').delay(350).fadeOut('slow')
	$('body').delay(350).css({ overflow: 'visible' })
})

$('html').attr('class', 'black_theme')
$('#currentYear').text(new Date().getFullYear())

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})