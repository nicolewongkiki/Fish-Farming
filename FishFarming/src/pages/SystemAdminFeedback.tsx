// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
// ** Demo Components Imports
import FeedBack from 'src/views/SystemAdmin/Feedback/Feed'
import UserInfo from 'src/views/SystemAdmin/Feedback/UserInfo'
import FromUser from 'src/views/SystemAdmin/Feedback/FromUser'

// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components Imports

const SystemAdminFeedback = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='User Information' titleTypographyProps={{ variant: 'h6' }} /><UserInfo />
          </Card>  
        </Grid>
        <Grid item xs={12}>
          <FromUser />
        </Grid>
        <Grid item xs={12}>
          <FeedBack />
        </Grid>
      
      </Grid>
    </ApexChartWrapper>
  )
}

export default SystemAdminFeedback
