import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'

const Job = ({ job }) => {
	return (
		<Paper className='job'>
			<div>
				<Typography>{job.title}</Typography>
				<Typography>{job.company}</Typography>
				<Typography>{job.location}</Typography>
			</div>
			<div>
				<Typography>{job.created_at.split(' ').slice(0, 4).join(' ')}</Typography>
			</div>
		</Paper>
	)
}

export default Job
