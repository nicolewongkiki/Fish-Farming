// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import CardHeader from '@mui/material/CardHeader'
import Card from '@mui/material/Card'
// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import FishDetail from 'src/views/Admin/FishDetail/FishDetail'
import ReportType from 'src/views/Admin/FishDetail/ReportType'
import DailyReport from 'src/views/Admin/FishDetail/DailyReport'
import FishForm from 'src/views/Admin/FishDetail/FishForm'
import MonthlyReport from 'src/views/Admin/FishDetail/MonthlyReport'
import FishInfo from 'src/views/Admin/FishDetail/FishInfo'
import FishTable from 'src/views/Admin/FishDetail/FishTable'
import FishInfo2 from 'src/views/Admin/FishDetail/FishInfo2'
import FishForm2 from 'src/views/Admin/FishDetail/FishForm2'

const AdminFishPage = () => {

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
        <Grid item xs={12} md={12}>
          <Card>
          <CardHeader title='Fish Qty' titleTypographyProps={{ variant: 'h6' }} />
            <FishTable />
          </Card> 
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default AdminFishPage
