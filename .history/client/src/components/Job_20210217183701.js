const Job = ({ job }) => {
	return (
		<div className='job'>
			{job.title}
			<br />
			{job.company}
		</div>
	)
}

export default Job
