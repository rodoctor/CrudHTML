document.querySelector(".form").addEventListener('submit',function(event){
    //event.preventDefault();
    let pessoas = JSON.parse(localStorage.getItem('pessoas'));

    //Caso não possua nenhum cadastro
    if(pessoas === null){
        pessoas = [];
    }
    AdicionarPessoa();
});






