# Automacao-Testes-API-JSONPlaceholder
Projeto de automação de testes de API
## Descrição
Projeto desenvolvido no intuito de ampliar conhecimentos pessoais acerca da automação de testes. 
Foram criados testes de API da API JSONPlaceholder: <https://jsonplaceholder.typicode.com/>, usando o CucumberJS.
## Limitações

Devido a limitações no funcionamento da API, que não persiste os dados de POSTs, PUTs e DELETEs, algumas validações, relacionadas à atualização dos dados no servidor não foram feitas. Um exemplo está comentado no Cenário 'Criar um post'. 
<br>
Após o post, poderia ter sido feito um GET com o id retornado na response do post, e os dados de retorno desse GET poderiam ser comparados com os dados enviados no POST, junto com a validação do status code 200.
```js
    response = await I.sendGetRequest('/posts/' + response.data.id)
    I.seeResponseContainsJson(body)
    I.seeResponseCodeIs(200)
```
    
## Para rodar o projeto na sua máquina

Se você deseja rodar o projeto em sua máquina, basta clonar o projeto deste repositório, e, num terminal, instalar as dependências:
>npm i

E para rodar os testes:

>npx codeceptjs run

## Cenários de Testes

- Buscar todos os posts
- Criar um post
- Sobrescrever um post
- Modificar um post
- Deletar um post

## Tecnologias

- nodeJS 
- codeceptJS
- JavaScript
- Git
## Passo a Passo para desenvolver o projeto do zero 
Para instalar o codeceptjs:
>npm i codeceptjs --save-dev

Para iniciar o projeto:
>npx codeceptjs init

Ao iniciar o projeto, são solicitadas algumas informações. Aqui estão minhas escolhas:
- Se eu queria usar typescritp : N
- Local de criação dos testes: deixei default (enter)
- Qual helper : REST
- Se eu queria usar jsonResponse: Y
- Local onde seriam guardados os outputs: deixei default (enter)
- Locate: deixei default -Inglês (enter) 
- Endpoint: https://jsonplaceholder.typicode.com/
- Nome da feature: posts
- Filename: deixei default (enter)

## Autora

Alice de Fátima Moraes Souza<br>
github: https://github.com/alicefms<br>
linkedIn: https://www.linkedin.com/in/alicefms/