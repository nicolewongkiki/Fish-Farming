// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
// ** Demo Components Imports
import FeedBack from 'src/views/Employee/Feedback/Feed'

// ** Demo Components Imports

const EmployeeFeedback = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FeedBack />
        </Grid>
      
      </Grid>
    </ApexChartWrapper>
  )
}

export default EmployeeFeedback
