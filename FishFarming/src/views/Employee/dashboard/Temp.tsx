// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useState, useEffect } from "react";

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

import Grid from '@mui/material/Grid'


//array
const Temp = ({currentDate  } : any ) => {
  console.log("currentDate",currentDate);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [xCategories, setXCategories] = useState<any[]>([]);
  const [xTempData, setXTempData] = useState<any[]>([]);

  useEffect(() => {
    console.log();
    async function getData() {
      try{

      }catch(e){}
      var obj = null;
      await fetch("http://aquamon.starsknights.com:18888/v1/pond/FS-001-02/"+currentDate, { method: 'GET', redirect: 'follow' })
        .then(response => response.text())
        .then((result) => {
          console.log(result);
          obj = JSON.parse(result);
          //const [APIData, setAPIData] = useState(obj);
          console.log("obj" + obj);
          var dumpArray = Object.assign([], obj);
          console.log(obj[obj.length - 1].timestamp.substring(11, 19));
          setLastUpdate(dumpArray[dumpArray.length - 1].timestamp.substring(11, 19))
  
          console.log(dumpArray);
          var dumpArray2: any[] = [] ;
          var TempArray : any[]= [];
          dumpArray.forEach((element:any) => {
            if (dumpArray2.indexOf(element.timestamp.substring(11, 13)) === -1) {
              console.log();
            }
            dumpArray2.push(element.timestamp.substring(11, 16));
            TempArray.push(element.temp);
          });
          
          console.log(dumpArray2);
          console.log(dumpArray2);

          setXCategories(dumpArray2);
         
          setXTempData(TempArray);

        })
        .catch(error => console.log('error', error));
    }
    getData();
    setInterval(()=>{
      getData();
    },900000)
    
  }, [])



  /*setInterval(()=>{
    getData()
  },900000)*/

  const Box2Data = [
    {
      name: 'TEMP',
      data: xTempData
    }
  ];


  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 9,
        distributed: true,
        columnWidth: '40%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    stroke: {
      width: 2,
      colors: [theme.palette.primary.main]
    },
    legend: { show: false },
    grid: {
      strokeDashArray: 7,
      padding: {
        top: -1,
        right: 0,
        left: -12,
        bottom: 5
      }
    },
    dataLabels: { enabled: false },
    colors: [
      theme.palette.primary.main,
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.background.default
    ],
    series: [

    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      title: {
        text: 'Time'
      },
      categories: xCategories
    },
    yaxis: {
      labels: {
        offsetX: -17
      },
      forceNiceScale: true
    }
  }


  return (
    <Card>
      <CardHeader
        title={"Current Pond Status "}
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
        subheader={"Last Update : " + lastUpdate}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />

      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>

        <Grid container spacing={12}>
          <Grid item xs={12} sm={12}>
            <Typography variant='h6' sx={{ marginBottom: 2, textAlign: 'center', fontWeight: 1000 }}>
              Temperature
            </Typography>
            <Card sx={{ border: 1, color: '#c5cae9' }}  >
              <CardContent>
              {"Last Update : " + lastUpdate}<ReactApexcharts type='line' height={205} options={options} series={Box2Data} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/*
        border: 1px solid rgb(0 0 0) !important
      tickPlacement: 'on',
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }

            show: true,
      tickAmount: 4,
      labels: {
        offsetX: -17,
        formatter: value => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}`
      }

data: [20, 70, 80, 40, 60, 100, 35] }
  class Qty {
    timestamp: string;
    ph: number;
    temp: number;
   
    getPH() {
        return this.ph;
    }
    
    getTemp() {
      return this.temp;
    }
    getTimestamp() {
      return this.temp;
    }
  }

  let newTodo = Object.assign(new Qty(), Data);
        <Box sx={{ mb: 7, display: 'flex', alignItems: 'center' }}>
          <Typography variant='h5' sx={{ mr: 4 }}>
            45%
          </Typography>
          <Typography variant='body2'>Your sales performance is 45% 😎 better compared to last month</Typography>
        </Box>
      */}
        <Button fullWidth variant='contained'>
          Details
        </Button>
      </CardContent>
    </Card>
  )
}

export default Temp
