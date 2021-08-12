# Entrega: Tabela de Multiplicação #

Para começar faça clone deste [repositório](https://classroom.github.com/a/SafNRfsP)

Nessa entrega você vai construir uma tabela de multiplicação. Você deve criar uma função que recebe um parâmetro "n" do tipo inteiro que vai ditar o tamanho da sua tabela (10x10, 12x12, 16x16, etc...).

Sua função deve utilizar o conceito de __loops aninhados__ para montar um __array multidimensional__. Com o array multidimensional montado, você deve utilizar o __console.table()__ no seu array para mostrar em forma de tabela no console. Veja um exemplo de um array multidimensional:

```js
let meuArray = [["banana", "maçã"], ["uva", "pera"], ["goiaba", "morango"]]

meuArray[0] // retorna ["banana", "maçã"]
meuArray[0][1] // retorna "maçã"
meuArray[2] // retorna ["goiaba", "morango"]
meuArray[2][0] // retorna "goiaba"
```

Veja o que acontece ao executar um "console.table()" na variável usada no exemplo:

<img src="https://files-kenzie-academy-brasil.s3.amazonaws.com/q1/spritn1/exemploTableFrutas_entrega_tabela_multiplicacao.png" width="100%">

Agora imagine que você está construindo uma tabela para que professores do ensino fundamental a usem em sala de aula. Isso que deve aparecer ao executar a sua função no Console do navegador:

<img src="https://files-kenzie-academy-brasil.s3.amazonaws.com/q1/spritn1/git_tabela_multi.gif" width="100%">

### Início

Você pode usar o seguinte documento HTML como ponto de partida:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Multiplication Table</title>
    </head>

    <body>
        <h1>Multiplication Table</h1>
        <script>
            // Se preferir, utilize o script em um arquivo .js separado.
            function nomeDaSuaFuncao() { // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
                // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
                let x = [];
                for (let i = 0; i <= 10; i++) {
                    x[i] = [];
                }
                console.table(x)
            }
        </script>
    </body>
</html>
```

## Bônus

Agora vamos deixar sua função um pouco mais dinâmica! Altere a sua função para que ela recebe um parâmetro n do tipo inteiro que permita a geração de tabelas de diferentes tamanhos, por exemplo, 12x12, 16x16...

Veja abaixo, um exemplo do resultado esperado:

<img src="https://files-kenzie-academy-brasil.s3.amazonaws.com/q1/spritn1/table.gif" width="100%">

__Se você quiser entender um pouco mais sobre o [console.table()](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)__ - [Link para documentação](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)

## Envio

Faça o push do código para seu repositório no GitLab e use a função do GitLab Pages que permite que o site seja visualizado diretamente. Por favor, envie a url do gitlab pages publicada.
