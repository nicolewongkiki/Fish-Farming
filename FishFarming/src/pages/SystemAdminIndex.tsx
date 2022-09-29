// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'
import CardHeader from '@mui/material/CardHeader'
import Card from '@mui/material/Card'
// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/SystemAdmin/dashboard/Table'
import UserRegisterRecord from 'src/views/SystemAdmin/dashboard/UserRegisterRecord'
import UserLoginRecord from 'src/views/SystemAdmin/dashboard/UserLoginRecord'
import UserUpdataDataRecord from 'src/views/SystemAdmin/dashboard/UserUpdataDataRecord'

import ChartAreaspline from 'mdi-material-ui/ChartAreaspline'
import ChartAreasplineVariant from 'mdi-material-ui/ChartAreasplineVariant'

const SystemAdminIndex = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <CardStatisticsVerticalComponent
                stats=''
                icon=''
                color='success'
                trendNumber=''
                title='Weather'
                subtitle=''
              />
        </Grid>
        <Grid item xs={12} md={3}>
        <CardStatisticsVerticalComponent
                stats=''
                icon={<ChartAreaspline />}
                color='success'
                trendNumber=''
                title='User Register Record'
                subtitle=''
              />
        </Grid>
        <Grid item xs={12} md={3}>
        <CardStatisticsVerticalComponent
                stats=''
                icon={<ChartAreasplineVariant />}
                color='secondary'
                trendNumber=''
                title='User Login Record'
                subtitle=''
              />          
        </Grid>
        <Grid item xs={12} md={3}>
        <CardStatisticsVerticalComponent
                stats=''
                icon={<ChartAreasplineVariant />}
                color='warning'
                trendNumber=''
                title='User Update Data Record'
                subtitle=''
              />
        </Grid>
        <Grid item xs={12} md={12}>
        <Card>
          <CardHeader title='Resources-Recent' titleTypographyProps={{ variant: 'h6' }} />
          <Table />
          </Card> 
        </Grid>        
        <Grid item xs={12} md={12}>
        <UserRegisterRecord />
        </Grid>
        <Grid item xs={12} md={12}>
        <UserLoginRecord />
        </Grid>
        <Grid item xs={12} md={12}>
        <UserUpdataDataRecord />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default SystemAdminIndex
