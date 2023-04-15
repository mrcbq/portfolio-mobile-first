const mail = document.querySelector('#mail');
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const mailValue = mail.value;
  const mailLowerCase = mailValue.toLowerCase();
  const alertMsg = document.querySelector('#alert-msg');

  if (mailValue === mailLowerCase) {
    alertMsg.style.display = 'inline';
    form.submit();
  } else {
    alertMsg.innerHTML = `The Email must be in lowercase, This is your mail in a valid format:
     ${mailLowerCase}`;
    alertMsg.style.display = 'inline';
  }
});