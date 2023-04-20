const joi = require('joi');


const schemaOnePost = joi.object({
    userId: joi.number(),
    id: joi.number(),
    title: joi.string(),
    body: joi.string()
})
const schemaGetAllPosts = joi.array().items(schemaOnePost)
let body= {userId: 1, title: "primeiro post", body:"Testando a api"}


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

Scenario('Modificar um post', async ({ I }) => {
    response = await I.sendPostRequest('/posts', body)
    body.body="Testando o put na api"
    I.sendPutRequest('/posts/' + 1 , body)
    I.seeResponseCodeIs(200)
    I.seeResponseMatchesJsonSchema(schemaOnePost)
    I.seeResponseContainsJson(body)
})

Scenario('Deletar um post', async ({ I }) => {
    I.sendDeleteRequest('/posts/'+ 1)
    I.seeResponseCodeIs(200)
})


