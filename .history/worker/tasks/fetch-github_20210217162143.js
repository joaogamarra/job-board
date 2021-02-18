var fetch = require('node-fetch')
var redis = require('redis'),
	client = redis.createClient()

const { promisify } = require('util')
const setAsync = promisify(client.set).bind(client)

const baseURL = 'https://jobs.github.com/positions.json'

const fetchGithub = async () => {
	let resultCount = 1,
		onPage = 0
	const allJobs = []

	while (resultCount > 0) {
		const res = await fetch(`${baseURL}?page=${onPage}`)
		const jobs = await res.json()

		resultCount = jobs.length
		allJobs.push(...jobs)
		onPage++
		console.log('got', resultCount, 'jobs')
	}

	const success = await setAsync('github', JSON.stringify(allJobs))

	console.log(success)
}

fetchGithub()

module.exports = fetchGithub
