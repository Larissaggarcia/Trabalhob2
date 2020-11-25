function areadocliente() {
    renderItem();
}

function renderItem() {
    var nomeUser = localStorage.getItem("nome").split('{"nome":"').join('');
    var emailUser = localStorage.getItem("email").split('{"email":"').join('');
    var senhaUser = localStorage.getItem("senha").split('{"senha":"').join('');
    
    document.getElementById("nome").innerHTML = `Nome: `+nomeUser.split('"}').join('');
    document.getElementById("email").innerHTML = `Email: `+emailUser.split('"}').join('');
    document.getElementById("senha").innerHTML = `Senha: `+senhaUser.split('"}').join('');
}


