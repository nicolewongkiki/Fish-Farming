// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import EmployeeDetail from 'src/views/Admin/EmployeeDetail/EmployeeDetail'
import UserForm from 'src/views/Admin/EmployeeDetail/UserForm'
import UserInfo from 'src/views/Admin/EmployeeDetail/UserInfo'

const AdminEmployeePage = () => {

          return (
    <ApexChartWrapper>
      <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
          <EmployeeDetail />
        </Grid>
        <Grid item xs={12} md={4}>
        <UserForm />
        </Grid>
        <Grid item xs={12} md={4}>
        <UserForm />
        </Grid>  
        <Grid item xs={12} md={4}>
        <UserInfo />
        </Grid>         
      </Grid>
    </ApexChartWrapper>
  )
}

export default AdminEmployeePage
