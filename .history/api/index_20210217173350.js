const express = require('express')
const app = express()
const port = 3001

const fetch = require('node-fetch')
const redis = require('redis'),
	client = redis.createClient()

const { promisify } = require('util')
const getAsync = promisify(client.get).bind(client)

app.get('/jobs', async (req, res) => {
	const jobs = await getAsync('github')

	res.send(JSON.parse(jobs).length)
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
