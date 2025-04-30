Verificar a versão do node
```sh
node -v
```


Dica Alura: Sempre utilizar === em comparação.

Dica Alura: Na maioria dos casos utilizar const, em casos especificos let(caso haja alteração), o var caiu em desuso

### funções Callback

#### Sem retorno
forEach() – Executa uma função para cada elemento do array (usado para efeitos colaterais).

push() – Adiciona elementos ao final do array (modifica o array original).

pop() – Remove o último elemento (modifica o array original).

shift() – Remove o primeiro elemento.

unshift() – Adiciona elementos no início.

splice() – Pode adicionar/remover elementos em qualquer posição.

sort() – Ordena os elementos (modifica o array original).

reverse() – Inverte os elementos do array (modifica o array original).

#### Com retorno
map() – Retorna um novo array com os resultados de uma função aplicada a cada item.

filter() – Retorna um novo array com os elementos que passaram em uma condição.

reduce() – Reduz o array a um único valor (útil para somas, concatenações etc.).

slice() – Retorna uma parte do array (não altera o original).

concat() – Junta dois ou mais arrays e retorna um novo.

flat() – Retorna um novo array com os subarrays "achatados".

includes() – Retorna true ou false se o valor estiver presente.

find() – Retorna o primeiro elemento que satisfaz a condição.

findIndex() – Retorna o índice do primeiro elemento que satisfaz a condição.

some() – Retorna true se algum elemento passar na condição.

every() – Retorna true se todos os elementos passarem na condição.

join() – Retorna uma string com os elementos unidos por um separador


### Spread Operator (Copiar arrays)
O spread operator (...) é um recurso do JavaScript que "espalha" (expande) os elementos de um array, propriedades de um objeto, ou valores de outro iterável em outro lugar.
Utilizado para Criar novos arrays ou objetos sem alterar os originais (imutabilidade)

```js
const numeros = [1, 2, 3];
const copia = [...numeros]; // CORRETO: cria uma cópia independente
console.log(copia); // [1, 2, 3]
```

### Set
É um método/classe que não aceita valores repetidos, logo é utilizado para retirar/remover/ocultar
duplicatas


### Promises

async sempre é na declaração da função
await

obs: Commander não inserido porque eu não quis adicionar.

Como rodar:
Atente-se a pasta que você está rodando o comando.
O seguinte comando roda funciona quando estiver dentro da pasta criandBiblioteca:

```sh
node src/cli.js files/texto-web.txt ./resultados/
```