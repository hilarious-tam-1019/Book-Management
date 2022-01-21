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
            format: 'numeric'
            
        },
        category: {
            type: 'string',
            enum: ['Romance','Horror','Comedy','Mystery','Action','Drama']
        },
        vote: {
            type: 'string',
            format: 'numeric'
        }
    },
    required: ['title', 'author', 'date', 'category','vote']
}

module.exports = model
