const joi = require('joi');


const schemaOnePost = joi.object({
    userId: joi.number(),
    id: joi.number(),
    title: joi.string(),
    body: joi.string()
})
const schemaGetAllPosts = joi.array().items(schemaOnePost)
let body= {userId: 1, title: "primeiro post", body:"Testando a api"}

//o id que seria response.data.id , sera setado hardcoded como 1 para prosseguir com alguns testes, 
//ja que não é possivel efetuar chamadas com id 101, que é retornado no post.

id = 1

Feature('posts');

Scenario('Buscar todos os posts',  async ({ I }) => {
    await I.sendGetRequest('/posts')
    I.seeResponseCodeIs(200)
    I.seeResponseMatchesJsonSchema(schemaGetAllPosts)
})

Scenario('Criar um post', async ({ I }) => {
    
    response = await I.sendPostRequest('/posts', body)
    I.seeResponseCodeIs(201)
    I.seeResponseMatchesJsonSchema(schemaOnePost)
    I.seeResponseContainsJson(body)
    
    // response = await I.sendGetRequest('/posts/' + response.data.id)
    // I.seeResponseContainsJson(body)
    // I.seeResponseCodeIs(200)
})

Scenario('Sobrescrever um post', async ({ I }) => {
    response = await I.sendPostRequest('/posts', body)
    body.body="Testando o put na api"
    I.sendPutRequest('/posts/' + id , body)
    I.seeResponseCodeIs(200)
    I.seeResponseMatchesJsonSchema(schemaOnePost)
    I.seeResponseContainsJson(body)
})

Scenario('Modificar um post', async ({ I }) => {
    response = await I.sendPostRequest('/posts', body)
    bodyPatch = {"title": "testando a API"}
    I.sendPatchRequest
    ('/posts/' + id , bodyPatch)
    I.seeResponseCodeIs(200)
    I.seeResponseContainsJson(bodyPatch)
})

Scenario('Deletar um post', async ({ I }) => {
    response = await I.sendPostRequest('/posts', body)
    I.sendDeleteRequest('/posts/'+ id)
    I.seeResponseCodeIs(200)
})


