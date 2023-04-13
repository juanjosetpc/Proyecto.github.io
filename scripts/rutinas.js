const select = document.getElementById('filtro-dias');
const elementos = document.getElementsByClassName('image-container');

select.addEventListener('change', (e) => {
  const valor = e.target.value;
  
  for (let i = 0; i < elementos.length; i++) {
    const dias = elementos[i].getAttribute('data-dias');
    
    if (valor === 'todos' || dias === valor) {
      elementos[i].style.display = 'block';
    } else {
      elementos[i].style.display = 'none';
    }
  }
});

