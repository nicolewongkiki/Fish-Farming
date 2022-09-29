// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import FishDetail from 'src/views/Employee/FishDetail/FishDetail'
import ReportType from 'src/views/Employee/FishDetail/ReportType'
import DailyReport from 'src/views/Employee/FishDetail/DailyReport'
import FishForm from 'src/views/Employee/FishDetail/FishForm'
import MonthlyReport from 'src/views/Employee/FishDetail/MonthlyReport'
import FishInfo from 'src/views/Employee/FishDetail/FishInfo'
import FishInfo2 from 'src/views/Employee/FishDetail/FishInfo2'
import FishForm2 from 'src/views/Employee/FishDetail/FishForm2'
const EmployeeFishPage = () => {

          return (
    <ApexChartWrapper>
      <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
          <FishDetail />
        </Grid>
        <Grid item xs={12} md={6}>
          <FishForm />
        </Grid>
        <Grid item xs={12} md={6}>
          <FishInfo />
        </Grid>
        <Grid item xs={12} md={6}>
          <FishForm2 />
        </Grid>
        <Grid item xs={12} md={6}>
          <FishInfo2 />
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

export default EmployeeFishPage
