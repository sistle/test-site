


const popup = document.querySelectorAll('[data-popup] ');
const popupLinks = document.querySelectorAll('.contacts__feedback');
const popupClose = document.querySelectorAll('.feedback__btn-close,.popup');
const popupBody = document.querySelectorAll('.popup__content');

const lockPadding = document.querySelectorAll(".lock-padding");

const body = document.querySelector('body');

let open = true;

popupLinks.forEach(popupLink => {
	popupLink.addEventListener('click', popupHandler);
})
popupBody.forEach(body => {
	body.addEventListener('click', event => {
		event.stopPropagation();
	})
})

popupClose.forEach(item => {
	item.addEventListener('click', modalClose);
})
function removePadding(value) {

	body.style.paddingRight = value;
	lockPadding.forEach(item => {
		item.style.paddingRight = value;
	})
}

function delay(time, status) {
	setTimeout(() => {
		open = status;
	}, time);
}
function popupHandler(event) {
	event.preventDefault();
	let current = this.dataset.popup;
	popup.forEach(item => {
		if (current === item.dataset.popup) {
			modalOpen(item);
		}
	})
}

function modalOpen(popup) {
	if (popup == null) return;
	if (open) {
		const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

		removePadding(lockPaddingValue);

		body.classList.add('lock');
		popup.classList.add('active');
		delay(500, false);
	}
}

function modalClose(event) {
	if (!open) {
		body.classList.remove('lock');
		this.closest('.popup').classList.remove('active');

		removePadding('0px');
		delay(500, true);
	}

}


document.addEventListener("DOMContentLoaded", () => {

	const formsBody = document.querySelector('.feedback__form');
	const btnSend = document.querySelector('.feedback__send');
	const userName = document.querySelector('.feedback__user');
	const userMail = document.querySelector('.feedback__email');
	const userMobile = document.querySelector('.feedback__mobile');


	function sendData() {
		btnSend.addEventListener('click', sendHandler);

		function sendHandler(event) {
			event.preventDefault();

			let inputsValue = [];

			[userName, userMail, userMobile].map(item => {
				inputsValue.push(item.value.trim());
			})

			const [userNameValue, userMailValue, userMobileValue] = inputsValue;

			const userNameChecked = isName(userNameValue);
			const userMailChecked = isEmail(userMailValue);
			const userMobileChecked = isMobile(userMobileValue);

			if (userNameChecked && userMailChecked && userMobileChecked) {
				formsBody.reset();
			}
		}

		function isName(name) {
			const nameTest = /^[a-zA-Z]{4,20}$/.test(name);
			checkError(userName, nameTest);
			return nameTest;
		}

		function isEmail(mail) {
			const mailTest = /^[a-zA-Z.][0-9a-zA-Z_.]{2,21}@[a-zA-Z]{2,12}\.[a-zA-Z]{2,12}/.test(mail);
			checkError(userMail, mailTest);
			return mailTest;
		}

		function isMobile(number) {
			const numberTest = /^[0-9]{4,12}$/.test(number);
			checkError(userMobile, numberTest);
			return numberTest;
		}

		function checkError(form, formStatus) {
			if (formStatus) {
				form.parentElement.classList.remove('error');
				form.parentElement.classList.add('succes');
			} else form.parentElement.classList.add('error');

		}

	}

	function removeError() {

		[userName, userMail, userMobile].forEach(item => {
			item.addEventListener('focus', function () {
				item.parentElement.classList.remove('error');
			})

		})
	}

	function init() {
		removeError();
		sendData();
	}
	init();
});




new Swiper('.intro__slider', {
	touchRatio: 2,
	observer: true,
	observeParents: true,
	watchOverflow: false,
	slidesPerView: 1,
	centeredSlides:true,
	
	initialSlide: 2,
	spaceBetween: 10,
	navigation: {
		nextEl: '.intro__next',
		prevEl: '.intro__prev'
	},
	autoplay: {
		delay: 4000,
		stopOnLastSlide: true,
		disableOnInteraction:true,
	}
});


