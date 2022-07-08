const dataNascimento = document.querySelector('#nascimento');

dataNascimento.addEventListener('blur', (e) => {
    validaDataNascimento(e.target);
})

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)  ;  
    let mensagem = '';


    if (!maiorIdade(dataRecebida)) {

        mensagem = 'Você deve ter 18 anos ou mais para poder se cadastrar!';
    } 

    input.setCustomValidity(mensagem)
}

function maiorIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());


    if (dataMais18 <= dataAtual){
        
    } else {
        
    }        

    return dataMais18 <= dataAtual
}

/*
TENTEI FAZER AS DEMAIS FUNÇÕES O MAIS FUNCIONAL POSSIVEL COMO A DE CIMA,
PORÉM BATI CABEÇA DEMAIS E DAVA ERRO ...

*/

var x;

function gravar () {
    processaNome();
    processaEmail();
    processaSenha();
    processaDataNascimento();
    processaCPF();
    processaCEP();
    processaEndereco();
    processaCidade();
    processaEstado();
    processaExperiencia();
}

function processaNome() {
    var x = document.getElementById("nome");
    x.value = x.value.toUpperCase();
}

function processaEmail() {
    var x = document.getElementById("email");
	
    x.value = x.value.toUpperCase();
}

function processaSenha() {
    var x = document.getElementById("senha");
	
    x.value = x.value.toUpperCase();
}

function processaDataNascimento() {
    var x = document.getElementById("nascimento");
	
    x.value = x.value.toUpperCase();
}

function processaCPF() {
    var x = document.getElementById("cpf");
	
    x.value = x.value.toUpperCase();
}

function processaCEP() {
    var x = document.getElementById("cep");
	
    x.value = x.value.toUpperCase();
}

function processaEndereco() {
    var x = document.getElementById("endereco");
	
    x.value = x.value.toUpperCase();
}

function processaCidade() {
    var x = document.getElementById("cidade");
	
    x.value = x.value.toUpperCase();
}

function processaEstado() {
    var x = document.getElementById("estado");
	
    x.value = x.value.toUpperCase();
}


function processaExperiencia() {
    var x = document.getElementById("botao-cadastro");
    
    x.value = x.value.toUpperCase();

}
 
var mensagem;

switch(gravar) {
    case "null":
			mensagem = "EROO";
			break;
	
		default:
			mensagem = "SUCESSO";
}




