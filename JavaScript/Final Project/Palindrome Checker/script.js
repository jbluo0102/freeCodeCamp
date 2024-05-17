const inputElement = document.getElementById("text-input");
const buttonElement = document.getElementById("check-btn");
const resultElement = document.getElementById("result");

buttonElement.addEventListener("click", () => {
  // Base check
  const input = inputElement.value;
  if (inputElement.value === "") {
    alert("Please input a value");
    return;
  }

  // Format the input
  const formattedInput = FormatInput(input);

  // Show and set the result text
  resultElement.style.display = "block";
  resultElement.innerText = `${input} ${
    IsPalindrome(formattedInput) ? "is" : "is not"
  } a palindrome.`;
});

function IsPalindrome(text) {
  if (inputElement.value === "") return false;
  else if (text.length === 1) return true;

  const size = text.length;
  for (let i = 0; i < size / 2; i++)
    if (text[i] !== text[size - i - 1]) return false;

  return true;
}

function FormatInput(input) {
  // Ex: My age is 0, 0 si ega ym
  // Need to lower/upper case and remove the space
  // -> my age is 0, 0 si ega ym
  // -> myageis0,0siegaym
  input = input.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  return input;
}
