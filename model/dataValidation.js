const model = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
            minLength: 2,
            maxLength: 25
        },
        author: {
            type: 'string',
            minLength: 2,
            maxLength: 15
        },
        date: {
            type: 'string',
            format: 'numeric',
            minimum: '0',
            maximum: '2021'
            
        },
        category: {
            type: 'string',
            enum: ['Romance','Horror','Comedy','Mystery','Action','Drama']
        },
        vote: {
            type: 'string',
            format: 'numeric',
            minimum: '0',
            maximum: '10'
        }
    },
    required: ['title', 'author', 'date', 'category','vote']
}

module.exports = model
