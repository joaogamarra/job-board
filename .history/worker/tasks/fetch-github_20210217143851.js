const fetch = require('node-fetch')

const baseUrl = 'https://jobs.github.com/positions.json'

module.exports = fetchGithub = async () => {
	const res = await fetch(baseUrl)
	const jobs = await res.json()

	console.log(jobs.length)
}
module.exports()
