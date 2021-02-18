import { useState, useEffect } from 'react'
import fetch from 'node-fetch'
import './App.css'
import Jobs from './components/Jobs'

const JOB_API_URL = 'http://localhost:3001/jobs'

const fetchJobs = async (updateCb) => {
	const res = await fetch(JOB_API_URL)
	const json = await res.json()

	updateCb(json)
}

function App() {
	const [jobList, setJobList] = useState([])

	useEffect(() => {
		fetchJobs(setJobList)
	}, [])

	return (
		<div className='App'>
			<Jobs jobs={jobList} />
		</div>
	)
}

export default App
