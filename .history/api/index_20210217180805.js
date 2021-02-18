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

	console.log(JSON.parse(jobs).length)
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
