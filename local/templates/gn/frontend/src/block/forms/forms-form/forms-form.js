import Inputmask from 'inputmask';

document.addEventListener('DOMContentLoaded', function() {
	const mess = document.getElementById('message');
	const okMessage = document.getElementById('okMessage');

	const form = document.forms.myform;

	Inputmask({
		mask: '+7 (999) 999-99-99',
		placeholder: '_'
	}).mask(form.user_phone);

	if (form) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			const name = form.user_name.value.trim();
			const phone = form.user_phone.value.trim();
			const email = form.user_email.value.trim();
			const country = form.user_country.value;
			const message = form.MESSAGE.value.trim();
			const agreement = form.PERSONAL_AGREE.checked;

			let errorMessages = [];

			if (!name) {
				errorMessages.push('Укажите ваше имя');
			}

			if (!phone && !email) {
				errorMessages.push('Укажите телефон или email');
			}

			if (!country) {
				errorMessages.push('Выберите страну из списка');
			}

			if (!message) {
				errorMessages.push('Напишите ваше сообщение');
			}

			if (!agreement) {
				errorMessages.push('Необходимо согласие на обработку данных');
			}

			if (errorMessages.length > 0) {
				if(okMessage) okMessage.style.display = "none";
				mess.innerText = 'Пожалуйста, исправьте следующие ошибки:\n\n' + errorMessages.join('\n');
				return false;
			}

			form.submit();
		});
	}
});
