import Typography from '@material-ui/core/Typography'
import Job from './Job'

const Jobs = ({ jobs }) => {
	return (
		<div className='jobs-list'>
			<Typography variant='h4' component='h1'>
				Entry level software jobs
			</Typography>
			{jobs.map((job) => (
				<Job key={job.id} job={job} />
			))}
		</div>
	)
}

export default Jobs
