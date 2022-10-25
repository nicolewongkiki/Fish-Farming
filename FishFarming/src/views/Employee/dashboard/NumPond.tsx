// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import { useState, useEffect } from "react";
// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const NumPond = () => {
  // ** Hook
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  useEffect(() => {

  });
  var APIDATA = [37, 57, 45, 75, 57, 40, 65] ;
  //var APIDATA = getData() ;
  //const [APIData, setAPIData] = useState(data);
  //console.log("Dataaaaa",data);
  async function getData(){
    var obj ;
    await fetch("http://aquamon.starsknights.com:18888/v1/pond/FS-001-02/20221025", { method: 'GET',redirect: 'follow' })
    .then(response => response.text())
    .then((result)=>{
      console.log(result);
      obj = JSON.parse(result);
      //const [APIData, setAPIData] = useState(obj);
      console.log(obj.length);

      console.log(obj[obj.length-1].timestamp.substring(11, 19));
      
    })
    .catch(error => console.log('error', error));
    return obj
  }
  getData()
  /*setInterval(()=>{
    getData()
  },900000)*/
  
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
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.primary.main,
      theme.palette.background.default,
      theme.palette.background.default
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
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      tickPlacement: 'on',
      labels: { show: true },
      axisTicks: { show: true },
      axisBorder: { show: true }
    },
    yaxis: {
      show: true,
      tickAmount: 4,
      labels: {
        offsetX: -17,
        formatter: value => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}`
      }
    }
  }

  return (
    
    <Card>
      <CardHeader
        title='Number of Pond'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        <ReactApexcharts type='line' height={205} options={options} series={ [{ data: APIDATA } ]} />
        {/*
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

export default NumPond
