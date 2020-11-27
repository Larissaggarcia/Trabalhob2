function cadastro() {
    addItem();
}

function addItem() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;

    const nomeobj = JSON.stringify({nome});
    const emailobj = JSON.stringify({email});
    const cpfobj = JSON.stringify({cpf});
    const senhaobj = JSON.stringify({senha});

    sessionStorage.setItem('nome', nomeobj);
    sessionStorage.setItem('email', emailobj);
    sessionStorage.setItem('cpf', cpfobj);
    sessionStorage.setItem('senha', senhaobj);
}
