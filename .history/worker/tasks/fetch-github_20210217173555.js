const fetch = require('node-fetch')
const redis = require('redis'),
	client = redis.createClient()

const { promisify } = require('util')
const setAsync = promisify(client.set).bind(client)

const baseUrl = 'https://jobs.github.com/positions.json'

const fetchGithub = async () => {
	let resultCount = 1,
		onPage = 1
	const allJobs = []

	//fetch all jobs
	while (resultCount > 0) {
		const res = await fetch(`${baseUrl}?page=${onPage}`)
		const jobs = await res.json()

		resultCount = jobs.length
		allJobs.push(...jobs)
		onPage++
		console.log('got', resultCount, 'jobs')
	}

	//filter jobs
	const jrJobs = allJobs.filter((job) => {
		const jobTitle = job.title.toLowerCase()
		let isJunior = true

		if (
			jobTitle.includes('senior') ||
			jobTitle.includes('mangar') ||
			jobTitle.includes('sr.') ||
			jobTitle.includes('architect')
		) {
			return false
		}

		return true
	})

	console.log('filteredJobs', jrJobs.length)

	//const success = await setAsync('github', JSON.stringify(allJobs))

	//console.log(success)
}

fetchGithub()

module.exports = fetchGithub
