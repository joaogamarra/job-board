import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'

const Job = ({ job }) => {
	return (
		<Paper className='job'>
			<Typography>{job.title}</Typography>
			<br />
			<Typography>{job.company}</Typography>
		</Paper>
	)
}

export default Job
