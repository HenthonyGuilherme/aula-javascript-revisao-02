// 1º) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes.

function modelosDeCarros(carro){
    switch (carro) {
      case carro = "hatch":
        return "Compra efetuada com sucesso.";
        break;
      case carro = "sedans":
        return  "Tem certeza que não prefere este modelo?";
        break;
      case carro = "motocicletas":
        return  "Tem certeza que não prefere este modelo?";
        break;
      case carro = "caminhonetes":
        return  "Tem certeza que não prefere este modelo?";
        break;
      default:
        return  "Não trabalhamos com este tipo de automóvel aqui.";
  }
  }
  
  // 2º) Criar um bloco de código, onde deverá ter três variáveis do tipo inteiro: a, b, c. Verifique se.
  
  function triangulo(a, b, c){
    if (a == b && b == c && c == a){
      return "O triângulo é equilátero";
    }
    else if (a != b && b != c && c != a){
      return ("O triângulo é escaleno");
    }
    else{
      return "O triângulo é isósceles";
    }
  }
  
  // 3º) Construa uma função que receba um número.
  
  function numero(n){
    if(n >= 0){
      return n + ", é Positivo";
    }
    else{
      return n + ", é Negativo";
    }
  }