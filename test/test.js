var assert = require('assert')
const fetch = require("node-fetch")

describe('Prueba de servicio de suma',async function() {
    it('2 + 2 debaria de ser 4', async function() {

        let res = await fetch('http://localhost:3000/add/2/2')
                    .then(response => response.json())
                    .then(data => { return data })

        assert.equal(res, 4)
    })
})
