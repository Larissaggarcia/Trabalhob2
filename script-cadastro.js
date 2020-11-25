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

    localStorage.setItem('nome', nomeobj);
    localStorage.setItem('email', emailobj);
    localStorage.setItem('senha', senhaobj);
}
