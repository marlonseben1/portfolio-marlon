  const texto = "Opa, tudo bem? Sou o Marlon!";
  const elemento = document.getElementById("texto-digitando");
  const fatos = document.querySelectorAll(".fatos");
  const foto = document.getElementById("foto-marlon");
  let index = 0;

  function digitar() {
    if (index < texto.length) {
      elemento.textContent += texto.charAt(index);
      index++;
      setTimeout(digitar, 100);
    } else {
      // Foto vai antes
      foto.classList.add("aparecer");

      // Fatos vão depois
      fatos.forEach((fato, i) => {
        setTimeout(() => {
          fato.classList.add("aparecer");
        }, (i + 1) * 400); 
      });
    }
  }

  digitar();