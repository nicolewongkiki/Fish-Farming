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
import PH from 'src/views/Employee/dashboard/PH'
import Temp from 'src/views/Employee/dashboard/Temp'

import NumPond from 'src/views/Employee/dashboard/NumPond'
import MonthlyQty from 'src/views/Employee/dashboard/MonthlyQty'
import Banner from 'src/views/Employee/dashboard/Banner'
import ResourcesRecent from 'src/views/Employee/dashboard/ResourcesRecent'
import { useState, useEffect } from "react";
import ChartAreaspline from 'mdi-material-ui/ChartAreaspline'
import ChartAreasplineVariant from 'mdi-material-ui/ChartAreasplineVariant'
import * as dayjs from 'dayjs'
import 'dayjs/locale/zh-hk' // import locale

const EmployeeIndex = () => {
  const [weatherData, setWeatherData] = useState<any>({ temp: "23", weather: "Sunny" });
  const [currentDate, setCurrentDate] = useState<any>(null);
  const [APIDATA, setAPIDATA] = useState<any>();

  useEffect(() => {
    let date = new Date();
    console.log(date);
    var now = dayjs(Date.now()).format('YYYYMMDD')
    console.log("now", now);
    setCurrentDate(now);


    async function getData() {

      await fetch("http://aquamon.starsknights.com:18888/v1/pond/FS-001-02/20221025", { method: 'GET', redirect: 'follow' })
        .then(response => response.json())
        .then((result) => {
          console.log("dataEMP" + result);

          var dumpArray = Object.assign([], result);
          if (dumpArray.length == 0) {
            setAPIDATA(dumpArray);

          } else {

            setAPIDATA(dumpArray);

          }
        })
    }

    //getData();
  }, [])

  return (
    <ApexChartWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Card>
            <CardHeader title='Warning - No critical problem found' titleTypographyProps={{ variant: 'h6' }} />
            {/* <Banner /> */}
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardStatisticsVerticalComponent
            stats={weatherData.temp + "°C"}
            icon={<CloudQueueIcon />}
            color='success'
            trendNumber=''
            title={'Weather : ' + weatherData.weather}
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
          <PH currentDate={currentDate} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Temp currentDate={currentDate} />
        </Grid>
        <Grid item xs={12} md={12}>
          <ORP_TDS currentDate={currentDate} />
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
