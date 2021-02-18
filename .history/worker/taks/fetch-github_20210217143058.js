const fetch = require('node-fetch')

const baseUrl = 'https://jobs.github.com/positions.json'

const fetchGithub = async () => {
	const jobs = await fetch(baseUrl)

	console.log(jobs.length)
}
fetchGithub()
export default fetchGithub
