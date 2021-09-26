// 1º) Exibir no console o resultado das seguintes validações, dado o valor da variável _numero.

function validar (_numero){
    if (_numero >= 0){
      return ' O valor número é um Número positivo';
    }
    else{
      return ' O valor número é um Número negativo';
    }
  } 
  
  // 2º) Criar uma função em javascript que receba três parâmetros numéricos valor A, valor B e valor C, validar.
  
  function tresParametros (a, b, c){
    let cal = a + c;
    if (a + c > b){
      return a +" + "+ c + " = "+ cal;
    }
    else{
      return a +" + "+ c + " = "+ b;
      
    }
    
  }
  
  // 3º) Os alunos da turma de Front-end estão estudando em horários diferentes.
  
  function horariosDiferentes(horario){
    switch (horario) {
      case horario = "matutino":
        return "Bom Dia!";
        break;
      case horario = "vespertino":
        return  "Bom Tarde!";
        break;
      case horario = "noturno":
        return  "Bom Noite!";
        break;
      default:
        return  "Valor Inválido!";
  }
  }