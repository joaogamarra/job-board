import Typography from '@material-ui/core/Typography'
import Job from './Job'

const Jobs = ({ jobs }) => {
	return (
		<div className='jobs-list'>
			<Typography variant='h1'>Entry level software jobs</Typography>
			{jobs.map((job) => (
				<Job job={job} />
			))}
		</div>
	)
}

export default Jobs
