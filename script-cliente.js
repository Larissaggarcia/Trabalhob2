function areadocliente() {
    renderItem();
}

function renderItem() {
    
    var nomeUser = sessionStorage.getItem("nome").split('{"nome":"').join('');
    var emailUser = sessionStorage.getItem("email").split('{"email":"').join('');
    var cpfUser = sessionStorage.getItem("cpf").split('{"cpf":"').join('');
    var senhaUser = sessionStorage.getItem("senha").split('{"senha":"').join('');

    
    document.getElementById("nome").innerHTML = `Nome: `+nomeUser.split('"}').join('');
    document.getElementById("email").innerHTML = `Email: `+emailUser.split('"}').join('');
    document.getElementById("cpf").innerHTML = `cpf: `+cpfUser.split('"}').join('');
    document.getElementById("senha").innerHTML = `Senha: `+senhaUser.split('"}').join('');
}