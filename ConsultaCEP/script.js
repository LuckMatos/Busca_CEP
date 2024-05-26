function busca() {
  if (
    document.querySelector("#cep").value == "" ||
    document.querySelector("#cep").value.length != 8
  ) {
    alert("Digite o CEP válido");
  }

  var cep = document.querySelector("#cep");
  console.log(cep.value);
  fetch("https://viacep.com.br/ws/" + cep.value + "/json/").then((response) => {
    response.json().then((data) => showData(data));
  });

  const showData = (result) => {
    for (const campo in result) {
      if (document.querySelector("#" + campo)) {
        document.querySelector("#" + campo).value = result[campo];
      }
    }
  };
}
function clean() {
  document.querySelector("#uf").value = " ";
  document.querySelector("#bairro").value = " ";
  document.querySelector("#cep").value = " ";
  document.querySelector("#logadouro").value = " ";
  document.querySelector("#localidade").value = " ";
}
