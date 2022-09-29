import HomeOutline from 'mdi-material-ui/HomeOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import Fish from 'mdi-material-ui/Fish'
import AccountEdit from 'mdi-material-ui/AccountEdit'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      sectionTitle: 'Employee'
    },
    {
      title: 'Main Page',
      icon: HomeOutline,
      path: '/EmployeeIndex'
    },
    {
      title: 'Fish Detail',
      icon: Fish,
      path: '/EmployeeFishPage'
    },
    {
      title: 'Account Setting',
      icon: AccountEdit,
      path: '/account-settings/EmployeeAccount'
    },
    {
      title: 'Feedback',
      icon: AlertCircleOutline,
      path: '/EmployeeFeedback',
    }
  ]
}

export default navigation
