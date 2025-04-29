Verificar a versão do node
```sh
node -v
```


Dica Alura: Sempre utilizar === em comparação.

Dica Alura: Na maioria dos casos utilizar const, em casos especificos let(caso haja alteração), o var caiu em desuso

### funções Callback

#### Sem retorno
forEach()

#### Com retorno
map()
reduce()
filter()


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
