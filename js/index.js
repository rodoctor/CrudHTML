window.addEventListener('load', function(event){
    let pessoas = JSON.parse(localStorage.getItem('pessoas'));
    
    if (pessoas !== null){
        Main();
    } else {
        //caso vazio cria array
        localStorage.setItem('pessoas','[]');
        alert('Não há pessoas cadastradas');
    }
});

function Main(){
    BuscarPessoa();
};




