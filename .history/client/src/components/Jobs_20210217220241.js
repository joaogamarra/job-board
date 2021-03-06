import { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Job from './Job'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

const Jobs = ({ jobs }) => {
	const [activeStep, setActiveStep] = useState(0)

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1)
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	return (
		<div className='jobs-list'>
			<Typography variant='h4' component='h1'>
				Entry level software jobs
			</Typography>
			{jobs.map((job) => (
				<Job key={job.id} job={job} />
			))}

			<MobileStepper
				variant='progress'
				steps={6}
				position='static'
				activeStep={activeStep}
				className={classes.root}
				nextButton={
					<Button size='small' onClick={handleNext} disabled={activeStep === 5}>
						Next
						<KeyboardArrowRight />
					</Button>
				}
				backButton={
					<Button size='small' onClick={handleBack} disabled={activeStep === 0}>
						<KeyboardArrowLeft />
						Back
					</Button>
				}
			/>
		</div>
	)
}

export default Jobs
