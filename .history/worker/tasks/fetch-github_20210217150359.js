const fetch = require('node-fetch')

const baseUrl = 'https://jobs.github.com/positions.json'

const fetchGithub = async () => {
	let resultCount = 1,
		onPage = 0
	const allJobs = []

	while (resultCount > 0) {
		const res = await fetch(`${baseUrl}?page=${onPage}`)
		const jobs = await res.json()

		resultCount = jobs.length
		allJobs.push(jobs)
		onPage++
		console.log('got', jobs.length, 'jobs')
	}

	console.log('got total', allJobs.length, 'jobs')
}

fetchGithub()

module.exports = fetchGithub
