const db = require("../../config/db")

module.exports = {
    async findOne(filters){
        let query = `SELECT * FROM users`

        Object.keys(filters).map(key => {
            //where | and 
            query = `${query}
            ${key}
            `

            Object.keys(filters).map(field => {
                //cpf = cpf
                query = `${query} ${field} = '${filters[key][field]}'`
            })
        })

        const results = await db.query(query)

        return results.rows[0]
    }
}