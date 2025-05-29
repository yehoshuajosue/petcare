const elementosDuvida = document.querySelectorAll(".duvida");

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function () {

        elementosDuvida.forEach(function (outraDuvida) {
            if (outraDuvida !== duvida) {
              outraDuvida.classList.remove("ativa");
            }
        });

    duvida.classList.toggle("ativa");
  });
});