// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'
import CardHeader from '@mui/material/CardHeader'
import Card from '@mui/material/Card'
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import ORP_TDS from 'src/views/Employee/dashboard/ORP_TDS'
import DailyQty from 'src/views/Employee/dashboard/DailyQty'
import NumPond from 'src/views/Employee/dashboard/NumPond'
import MonthlyQty from 'src/views/Employee/dashboard/MonthlyQty'
import Banner from 'src/views/Employee/dashboard/Banner'
import ResourcesRecent from 'src/views/Employee/dashboard/ResourcesRecent'

import ChartAreaspline from 'mdi-material-ui/ChartAreaspline'
import ChartAreasplineVariant from 'mdi-material-ui/ChartAreasplineVariant'

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
{{

}}
const EmployeeIndex = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Card>
          <CardHeader title='Warning - No critical problem found' titleTypographyProps={{ variant: 'h6' }} />
          <Banner />
          </Card> 
        </Grid>
        <Grid item xs={12} md={6}>
          <CardStatisticsVerticalComponent
                stats='---'
                icon={<CloudQueueIcon/>}
                color='success'
                trendNumber=''
                title='Weather'
                subtitle=''
              />
        </Grid>
        <Grid item xs={12} md={6}>
        <CardStatisticsVerticalComponent
                stats='FS-001-02'
                icon={<ChartAreaspline />}
                color='info'
                trendNumber=''
                title='Pond'
                subtitle=''
              />
        </Grid>
      
        <Grid item xs={12} md={12}>
          <DailyQty />
        </Grid>
        <Grid item xs={12} md={12}>
          <ORP_TDS />
        </Grid>
        
        
      </Grid>
    </ApexChartWrapper>
  )
}
/*  
 <Grid item xs={12} md={12}>
        <MonthlyQty />
        </Grid>
 <Grid item xs={12} md={12}>
          <NumPond />
        </Grid>
  <Grid item xs={12} md={12}>
          <Card>
          <CardHeader title='Resources-Recent' titleTypographyProps={{ variant: 'h6' }} />
          <ResourcesRecent />
          </Card> 
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
*/ 
export default EmployeeIndex
