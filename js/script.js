const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');
const navLinks = document.querySelectorAll('#main-nav a');
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

menuToggle.addEventListener('click', () => {
	const isOpen = mainNav.classList.toggle('is-open');
	menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		mainNav.classList.remove('is-open');
		menuToggle.setAttribute('aria-expanded', 'false');
	});
});

contactForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const formData = new FormData(contactForm);
	const subject = encodeURIComponent(`Contato de ${formData.get('name')}`);
	const body = encodeURIComponent(`${formData.get('message')}\n\nE-mail: ${formData.get('email')}`);
	window.location.href = `mailto:isabelle.gomes@email.com?subject=${subject}&body=${body}`;
	formStatus.textContent = 'Seu aplicativo de e-mail será aberto para concluir a mensagem.';
});

