// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import PondDetail from 'src/views/Admin/PondDetail/PondDetail'
import ReportType from 'src/views/Admin/PondDetail/ReportType'
import DailyReport from 'src/views/Admin/PondDetail/DailyReport'
import MonthlyReport from 'src/views/Admin/PondDetail/MonthlyReport'
import PondForm from 'src/views/Admin/PondDetail/PondForm'
import PondInfo from 'src/views/Admin/PondDetail/PondInfo'
import GrangeForm from 'src/views/Admin/PondDetail/GrangeForm'
import GrangeInfo from 'src/views/Admin/PondDetail/GrangeInfo'
import ECOLifeForm from 'src/views/Admin/PondDetail/ECOLifeForm'
import ECOLifeInfo from 'src/views/Admin/PondDetail/ECOLifeInfo'
import SensorGroupForm from 'src/views/Admin/PondDetail/SensorForm'
import SensorGroupInfo from 'src/views/Admin/PondDetail/SensorInfo'
import ChangeLogForm from 'src/views/Admin/PondDetail/LogForm'
import ChangeLogInfo from 'src/views/Admin/PondDetail/LogInfo'

const AdminPondPage = () => {

          return (
    <ApexChartWrapper>
      <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
          <PondDetail />
        </Grid>
        <Grid item xs={12} md={6}>
        <PondInfo />
        </Grid> 
        <Grid item xs={12} md={6}>
        <PondForm />
        </Grid> 
        <Grid item xs={12} md={6}>
        <GrangeInfo />
        </Grid>  
        <Grid item xs={12} md={6}>
        <GrangeForm />
        </Grid>
        <Grid item xs={12} md={6}>
        <ECOLifeForm />
        </Grid>
        <Grid item xs={12} md={6}>
        <ECOLifeInfo />
        </Grid> 
        <Grid item xs={12} md={6}>
        <SensorGroupForm />
        </Grid> 
        <Grid item xs={12} md={6}>
        <SensorGroupInfo />
        </Grid> 
        <Grid item xs={12} md={6}>
        <ChangeLogForm />
        </Grid> 
        <Grid item xs={12} md={6}>
        <ChangeLogInfo />
        </Grid>  
        <Grid item xs={12} md={12}>
        <ReportType />
        </Grid>
        <Grid item xs={12} md={12}>
        <DailyReport />
        </Grid>
        <Grid item xs={12} md={12}>
        <MonthlyReport />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default AdminPondPage
