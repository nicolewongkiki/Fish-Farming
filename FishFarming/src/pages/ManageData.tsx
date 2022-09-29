// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import ManageDetail from 'src/views/SystemAdmin/ManageData/ManageDetail'
import FishInfo from 'src/views/SystemAdmin/ManageData/FishInfo'
import FishForm from 'src/views/SystemAdmin/ManageData/FishForm'
import UserInfo from 'src/views/SystemAdmin/ManageData/UserInfo'
import UserForm from 'src/views/SystemAdmin/ManageData/UserForm'
import PondForm from 'src/views/SystemAdmin/ManageData/PondForm'
import PondInfo from 'src/views/SystemAdmin/ManageData/PondInfo'
import GrangeForm from 'src/views/SystemAdmin/ManageData/GrangeForm'
import GrangeInfo from 'src/views/SystemAdmin/ManageData/GrangeInfo'
import ECOLifeForm from 'src/views/SystemAdmin/ManageData/ECOLifeForm'
import ECOLifeInfo from 'src/views/SystemAdmin/ManageData/ECOLifeInfo'
import SensorGroupForm from 'src/views/SystemAdmin/ManageData/SensorForm'
import SensorGroupInfo from 'src/views/SystemAdmin/ManageData/SensorInfo'
import ChangeLogForm from 'src/views/SystemAdmin/ManageData/LogForm'
import ChangeLogInfo from 'src/views/SystemAdmin/ManageData/LogInfo'


const ManageData = () => {

          return (
    <ApexChartWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <ManageDetail />
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
        <Grid item xs={12} md={6}>
        <UserInfo />
        </Grid>  
        <Grid item xs={12} md={6}>
        <UserForm />
        </Grid>

        <Grid item xs={12} md={6}>
        <FishInfo />
        </Grid>  
        <Grid item xs={12} md={6}>
        <FishForm />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default ManageData
