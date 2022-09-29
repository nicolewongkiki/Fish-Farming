// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import Data1 from 'src/Sample Data 20220801/20220801_000734.json'
import Data2 from 'src/Sample Data 20220801/20220801_002235.json'
import Data3 from 'src/Sample Data 20220801/20220801_003737.json'
import Data4 from 'src/Sample Data 20220801/20220801_005238.json'
import Data5 from 'src/Sample Data 20220801/20220801_010739.json'
import Data6 from 'src/Sample Data 20220801/20220801_012240.json'
import Data7 from 'src/Sample Data 20220801/20220801_013741.json'


var time = [Data1.timestamp.substring(11, 19),Data2.timestamp.substring(11, 19),
  Data3.timestamp.substring(11, 19),Data4.timestamp.substring(11, 19),
  Data5.timestamp.substring(11, 19),Data6.timestamp.substring(11, 19),
  Data7.timestamp.substring(11, 19)];

var temp = [Data1.temp, Data2.temp, Data3.temp, Data4.temp, Data5.temp, Data6.temp, Data7.temp]

var ph = [Data1.ph, Data2.ph, Data3.ph, Data4.ph, Data5.ph, Data6.ph, Data7.ph]

const DailyReport = () => {
    const Box1Data = [
    {
      name: 'PH',
      data: [Data1.ph, Data2.ph, Data3.ph, Data4.ph, Data5.ph, Data6.ph, Data7.ph]
    }
  ];

  const Box2Data = [
    {
      name: 'TEMP',
      data: [Data1.temp, Data2.temp, Data3.temp, Data4.temp, Data5.temp, Data6.temp, Data7.temp]
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
    },    xaxis: {
      title: {
        text: 'Time'
      },
  categories: [time[0], time[1], time[2], time[3], time[4], time[5], time[6]]
},
yaxis: {      labels: {
  offsetX: -17
},
  forceNiceScale: true
}

  }

  return (
    <Card>
      <CardHeader
        title='Daily Report'
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
      <Grid container spacing={12}>
          <Grid item xs={12} sm={6}>
      <Typography variant='h6' sx={{ marginBottom: 2,textAlign: 'center',fontWeight: 1000 }}>
          PH
        </Typography>
        <ReactApexcharts type='line' height={205} options={options} series={Box1Data} /> 
        </Grid>
          <Grid item xs={12} sm={6}>
         <Typography variant='h6' sx={{ marginBottom: 2,textAlign: 'center',fontWeight: 1000 }}>
          TEMP
        </Typography>
        <ReactApexcharts type='line' height={205} options={options} series={Box2Data} />
        </Grid>
        </Grid>   
      
        <Button fullWidth variant='contained'>
          Details
        </Button>
      </CardContent>
    </Card>
  )
}

export default DailyReport
