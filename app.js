'use strict';
const container = document.querySelector('.container');
const btnContainer = document.querySelector('.btn__container');
const ratingButtons = document.querySelectorAll('.btn__container button');
const submitBtn = document.querySelector('.submit_btn');
const resultText = document.querySelector('.result');

ratingButtons.forEach(btn => {
	btn.addEventListener('click', e => {
		let clicked = btn.textContent;
		for (let i = 0; i < clicked; i++) {
			ratingButtons[i].style.color = 'white';
		}
		submitBtn.addEventListener('click', () => {
			btn.style.color = 'hsl(217, 12%, 63%)';
			resultText.textContent = `You selected ${clicked} out of ${ratingButtons.length}`;
			document.querySelector('.star__container').classList.add('hidden');
			document.querySelector('.content').classList.add('hidden');
			document.querySelector('.rating__result').classList.remove('hidden');
		});
	});
	btn.style.color = 'hsl(217, 12%, 63%)';
});
