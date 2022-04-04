
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


