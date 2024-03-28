# Middlewares globais

## Neste primeiro middlewares podemos perceber que ele foi executado porem o insomnia fica esperando um segundo chamado para chegar ate a rota /hello
![1](https://github.com/Alexandre-Konrath/Brincando-com-Middlewares/assets/160286787/e95228e9-82d9-4181-920d-feb33b134a70)

## Porem ele só completa a execução chegando na rota /hello quando ele passa pelo next(); que quer dizer que ele chama para proxima execução.
![2](https://github.com/Alexandre-Konrath/Brincando-com-Middlewares/assets/160286787/30aab386-2109-42a2-ab12-87b1368e636d)

##
## E nesse fiz um teste colocando 2 middlewares para serem executados um atrás do outro
![3](https://github.com/Alexandre-Konrath/Brincando-com-Middlewares/assets/160286787/da1fb59b-dd8c-43b1-9154-64cf81a13668)

## Aprofundando mais neste teste coloquei um terceiro middlewares após a ultima chamada do next() e mesmo assim deu certo
![4](https://github.com/Alexandre-Konrath/Brincando-com-Middlewares/assets/160286787/e5d20e14-5c92-4730-a69d-e9dcf60331d9)

# Middlewares locais

## Colocando o middlewares junto com a rota /hello ele se torna um middlewares local, após todos os outros serem executados ele é o ultimo a ser chamdo e executando a função se o parâmetro de name era encontrado
![5](https://github.com/Alexandre-Konrath/Brincando-com-Middlewares/assets/160286787/c1c2270e-28bf-4b92-825d-63cc67fa1ea5)
![6](https://github.com/Alexandre-Konrath/Brincando-com-Middlewares/assets/160286787/2893c81d-64b9-4677-8460-c0b6b5269a2d)

## Agora testando e colocando mais um middlewares para verificar se o usuário era o Alexandre ou o Felipe
![7](https://github.com/Alexandre-Konrath/Brincando-com-Middlewares/assets/160286787/ac8518b4-c77a-4a2b-ae8a-c531de0ece08)
![8](https://github.com/Alexandre-Konrath/Brincando-com-Middlewares/assets/160286787/2dee4ae2-278b-4736-ba05-9dec56e6c792)
![9](https://github.com/Alexandre-Konrath/Brincando-com-Middlewares/assets/160286787/57328bfa-f40a-4cf7-acbb-fe0ea0d36c63)

