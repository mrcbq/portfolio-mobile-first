const inputs = document.querySelectorAll('.contact-form input, textarea');

const formValues = {};

inputs.forEach(input => {
  input.addEventListener('change', e => {
    formValues[e.target.name] = e.target.value;
    localStorage.setItem('formValues', JSON.stringify(formValues));
    console.log(localStorage);
  });
});


