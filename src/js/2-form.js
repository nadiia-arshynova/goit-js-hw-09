const formData = {
  email: "",
  message: "",
};

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");

document.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData);
      formData.email = parsedData.email || "";
      formData.message = parsedData.message || "";
      form.elements.email.value = formData.email;
      form.elements.message.value = formData.message;
    } catch (error) {
      console.error("Помилка парсингу даних з localStorage:", error);
    }
  }
});

form.addEventListener("input", event => {
  const { name, value } = event.target;
  if (name in formData) {
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

form.addEventListener("submit", event => {
  event.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert("Fill please all fields");
    return;
}
console.log(formData); 

  localStorage.removeItem(STORAGE_KEY);
  formData.email = "";
  formData.message = "";
  form.reset();
});