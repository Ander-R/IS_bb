const carousel = document.querySelector('.carrousel');
const photos = document.querySelectorAll('.photo_element');
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modal = document.querySelector(".modal");

let currentIndex = 0;  // Establece la posición actual a la misma o algo asi

// Siguiente imagen en el carrousel
function nextImage() {
  currentIndex = (currentIndex + 1) % photos.length;
  const width = photos[0].offsetWidth + 92;  // +92 idk why it doesnt work well without

  carousel.scrollTo({
    left: width * currentIndex, 
    behavior: 'smooth'
  });
}

// Cada 4s
setInterval(nextImage, 4000); 

// Next when click
photos.forEach(photo => {
  photo.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % photos.length;
    const width = photos[0].offsetWidth + 92;

    carousel.scrollTo({
      left: width * currentIndex,
      behavior: 'smooth'
    });
  });
});

//Botones
openBtn.addEventListener("click", (e)=> {
  e.preventDefault();
  modal.classList.add("modal-show");
})

closeBtn.addEventListener("click", (e)=> {
  e.preventDefault();
  modal.classList.remove("modal-show");
})

//Dont ask me
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");

  if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Por favor, ingrese un correo válido.";
    emailInput.focus();
  } else {
    emailError.textContent = ""; 
    alert("Formulario enviado correctamente.");
    this.submit(); 
  }
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}