let nome = "Bruno Pinho Campos 1934"

console.log(nome.match(/[a-m|n-z|0-9]/ig))
// mostre-me todas as letras de a-m, e também de, n-z, e também de, 0-9, ignorando case sensitve, na string global 

 /*   
    - é o mesmo que ( até )
    | é o mesmo que ( também )

    Metacaracteres:
    \d = somente númerais
    \s = espaços
    \b = letra
*/

console.log(nome.match(/\d/ig)); // numero

console.log(nome.match(/\s/ig)); // espaço em branco

console.log(nome.match(/\bP/ig)); // letra