import './App.css'
import Jobs from './components/Jobs'

const mockJobs = [{ title: 'SWE1', company: 'Google' }]

function App() {
	return (
		<div className='App'>
			<Jobs jobs={mockJobs} />
		</div>
	)
}

export default App
