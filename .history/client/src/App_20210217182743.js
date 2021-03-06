import { useState, useEffect } from 'react'
import fetch from 'node-fetch'
import './App.css'
import Jobs from './components/Jobs'

const JOB_API_URL = 'http://localhost:3001/jobs'

const mockJobs = [
	{ title: 'SWE1', company: 'Google' },
	{ title: 'SWE1', company: 'Apples' },
	{ title: 'SWE1', company: 'Facebook' },
]

const fetchJobs = async () => {
	const res = await fetch(JOB_API_URL)
	const json = await res.json()

	return json
}

function App() {
	const [jobList, setJobList] = useState('')

	useEffect(() => {
		setJobList(fetchJobs())
	}, [])

	return (
		<div className='App'>
			<Jobs jobs={mockJobs} />
		</div>
	)
}

export default App
