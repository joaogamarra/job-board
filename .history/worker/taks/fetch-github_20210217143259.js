const fetch = require('node-fetch')

const baseUrl = 'https://jobs.github.com/positions.json'

module.exports = fetchGithub = async () => {
	const jobs = await fetch(baseUrl)

	console.log(jobs.length)
}
module.exports()
