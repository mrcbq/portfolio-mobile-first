const inputs = document.querySelectorAll('.contact-form input, textarea');

const formValues = {};

inputs.forEach(input => {
  input.addEventListener('change', e => {
    formValues[e.target.name] = e.target.value;
    localStorage.setItem('formValues', JSON.stringify(formValues));
    console.log(localStorage);
  });
});

const storedValues = JSON.parse(localStorage.getItem('formValues'));
if (storedValues) {
  Object.keys(storedValues).forEach(key => {
const input = document.querySelector(`[name="${key}"]`); 
  if (input) {
      input.value = storedValues[key];
      console.log(storedValues[key]);
     }
  });
}