const sliderSwiperConfig = {
	grabCursor: true,
	keyboard: {
		enabled: true,
	},
	mousewheel: {
		releaseOnEdges: true,
	},
};

const fullRpSlider = new Swiper('.fullRpSlider', {
	...sliderSwiperConfig,
	slidesPerView: 'auto',
	spaceBetween: 24,
	navigation: {
		prevEl: '#fullRpSliderPrev',
		nextEl: '#fullRpSliderNext'
	},
});


const rpgBossesSlider = new Swiper('.rpgBossesSlider', {
	...sliderSwiperConfig,
	slidesPerView: 1,
	spaceBetween: 0,
	navigation: {
		prevEl: '#rpgBossesSliderPrev',
		nextEl: '#rpgBossesSliderNext'
	}
});

const rpgMountsSlider = new Swiper('.rpgMountsSlider', {
	...sliderSwiperConfig,
	slidesPerView: 1,
	spaceBetween: 0,
	navigation: {
		prevEl: '#rpgMountsSliderPrev',
		nextEl: '#rpgMountsSliderNext'
	}
});

const miniGamesSlider = new Swiper('.miniGamesSlider', {
	...sliderSwiperConfig,
	slidesPerView: 'auto',
	spaceBetween: 24,
	navigation: {
		prevEl: '#miniGamesSliderPrev',
		nextEl: '#miniGamesSliderNext'
	}
});

var loginModalElement = document.getElementById('loginModal');
if (loginModalElement) {
	var loginModal = new bootstrap.Modal(loginModalElement, {});
}

var login2FAModalElement = document.getElementById('login2FAModal');
if (login2FAModalElement) {
	var login2FAModal = new bootstrap.Modal(login2FAModalElement, {});
}

var sponsorsModalElement = document.getElementById('sponsorsModal');
if (sponsorsModalElement) {
	var sponsorsModal = new bootstrap.Modal(sponsorsModalElement, {});
}

var launcherModalElement = document.getElementById('launcher');
if (launcherModalElement) {
	var launcherModal = new bootstrap.Modal(launcherModalElement, {});
}

var startgameModalElement = document.getElementById('startgame');
if (startgameModalElement) {
	var startgameModal = new bootstrap.Modal(startgameModalElement, {});
}

var testingGuideModalElement = document.getElementById('testingGuideModal');
if (testingGuideModalElement) {
    var testingGuideModal = new bootstrap.Modal(testingGuideModalElement, {});
}


window.addEventListener('scroll', () => {
	if (window.scrollY > 800) {
		document.getElementById('scrollButtons').classList.remove('__hidden');
	} else {
		document.getElementById('scrollButtons').classList.add('__hidden');
	}
});

AOS.init({
	once: true,
});

document.querySelectorAll('.togglePassword').forEach(button => {
	button.addEventListener('click', function () {
		// Найти родительский контейнер
		const parent = this.closest('.auth-modal__input');
		
		// Найти поле ввода в этом контейнере
		const passwordInput = parent.querySelector('input[type="password"], input[type="text"]');
		const toggleIcon = this.querySelector('i'); // Иконка внутри кнопки

		// Переключение типа поля ввода
		if (passwordInput.type === 'password') {
			passwordInput.type = 'text';
			toggleIcon.classList.remove('icon-noview');
			toggleIcon.classList.add('icon-view');
		} else {
			passwordInput.type = 'password';
			toggleIcon.classList.remove('icon-view');
			toggleIcon.classList.add('icon-noview');
		}
	});
});

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}

function openMobileHeader() {
	const header = document.getElementById('mobileHeader');
	const burger = document.getElementById('mobileHeaderBurger');
	const button = document.getElementById('mobileHeaderButton');
	const classOpen = '__open';
	const classActive = 'active';

	if (header.classList.contains(classOpen)) {
		header.classList.remove(classOpen);
		button.classList.remove(classActive);
		burger.classList.remove(classActive);
	} else {
		header.classList.add(classOpen);
		button.classList.add(classActive);
		burger.classList.add(classActive);
	}
}

function openLogin() {
	loginModal.show();
}

function goLoginAction() {
	loginModal.hide();
	login2FAModal.show();
}

function openDownload() {
	launcherModal.show();
}

function openRegister() {
    let loginModalEl = document.getElementById('loginModal');
    let loginModal = bootstrap.Modal.getInstance(loginModalEl);
    
    if (loginModal) {
        loginModal.hide();
    }
    
    let serverModal = new bootstrap.Modal(document.getElementById('serverModal'));
    serverModal.show();
}

function goToReg(serverName) {
    window.location.href = '/reg.html?server=' + serverName;
}

function openStartGame() {
	startgameModal.show();
}

function openSponsors() {
	sponsorsModal.show();
}

function openTestingGuide() {
    testingGuideModal.show();
}
