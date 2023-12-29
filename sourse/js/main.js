
const btn = document.querySelectorAll(".btn--translate");
// Беремо всі кнопки з таким класом, перебераємо їх, за допомогой const parentElement = this.parentNode; находимо 
// батьківський елемент і присвоюємо йому новий клас
btn.forEach((i) => {
    i.addEventListener('click', function() {
        const parentElement = this.parentNode;
        parentElement.classList.toggle("article--text_inner_active")
  });
});


