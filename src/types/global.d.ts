/*
Podemos criar arquivos focados apenas na declaração de tipos e interfaces, estes devem ser terminados em .d.ts.
O TypeScript não irá compilar eles, mas os tipos declarados poderão ser utilizados globalmente na sua aplicação.
Esse tipo de declaração é comum em bibliotecas criadas em JavaScript que desejam dar suporte ao uso da mesma em TypeScript.


Crie uma pasta específica para os arquivos .d.ts, pois o TS ignora arquivos que possuem o mesmo nome e diretório, em favor do arquivo que terminar em .ts.
*/

interface Produto {
    nome: string;
  }