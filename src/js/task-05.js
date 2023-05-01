const textInput = document.querySelector("#name-input");
console.log(textInput);

const output = document.querySelector("#name-output");
console.log(output);

textInput.addEventListener('input', newInput);

function newInput(event) {
 
    output.textContent = event.currentTarget.value;

  if (!event.currentTarget.value) {
    output.textContent = 'Anonymous'
  }
}