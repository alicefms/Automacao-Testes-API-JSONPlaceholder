const joi = require('joi');

Feature('posts');

Scenario('Buscar todos os posts',  async ({ I }) => {
    response = await I.sendGetRequest('/posts')
    I.seeResponseCodeIs(200)
    I.seeResponseMatchesJsonSchema(joi.array().items(
        joi.object({
            userId: joi.number(),
            id: joi.number(),
            title: joi.string(),
            body: joi.string()

        })
    ))
})
