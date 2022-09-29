// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'
import CardHeader from '@mui/material/CardHeader'
import Card from '@mui/material/Card'
// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import DailyQty from 'src/views/Admin/dashboard/DailyQty'
import NumPond from 'src/views/Admin/dashboard/NumPond'
import MonthlyQty from 'src/views/Admin/dashboard/MonthlyQty'
import Banner from 'src/views/Admin/dashboard/Banner'
import BestPond from 'src/views/Admin/dashboard/BestPond'

import ChartAreaspline from 'mdi-material-ui/ChartAreaspline'
import ChartAreasplineVariant from 'mdi-material-ui/ChartAreasplineVariant'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Card>
          <CardHeader title='Warning' titleTypographyProps={{ variant: 'h6' }} />
          <Banner />
          </Card> 
        </Grid>
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
                title='Number of Ponds'
                subtitle=''
              />
        </Grid>
        <Grid item xs={12} md={3}>
        <CardStatisticsVerticalComponent
                stats=''
                icon={<ChartAreasplineVariant />}
                color='secondary'
                trendNumber=''
                title='Daily Average Quality in Ponds'
                subtitle=''
              />          
        </Grid>
        <Grid item xs={12} md={3}>
        <CardStatisticsVerticalComponent
                stats=''
                icon={<ChartAreasplineVariant />}
                color='warning'
                trendNumber=''
                title='Monthly Average Quality in Ponds'
                subtitle=''
              />
        </Grid>
        <Grid item xs={12}>
        <Card>
          <CardHeader title='Top 4 Worst Quality Record' titleTypographyProps={{ variant: 'h6' }} />
          </Card> 
        </Grid>        
        <Grid item xs={12} md={3}>
        <BestPond/>
        </Grid> 
        <Grid item xs={12} md={3}>
        <BestPond/>
        </Grid> 
        <Grid item xs={12} md={3}>
        <BestPond/>
        </Grid> 
        <Grid item xs={12} md={3}>
        <BestPond/>
        </Grid> 
      
        <Grid item xs={12} md={12}>
          <NumPond />
        </Grid>
        <Grid item xs={12} md={12}>
          <DailyQty />
        </Grid>
        <Grid item xs={12} md={12}>
        <MonthlyQty />
        </Grid>
      
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
