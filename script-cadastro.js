function cadastro() {
    addItem();
}

function addItem() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const nomeobj = JSON.stringify({nome});
    const emailobj = JSON.stringify({email});
    const senhaobj = JSON.stringify({senha})

    sessionStorage.setItem('nome', nomeobj);
    sessionStorage.setItem('email', emailobj);
    sessionStorage.setItem('senha', senhaobj);
}
