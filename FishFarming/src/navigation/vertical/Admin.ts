import HomeOutline from 'mdi-material-ui/HomeOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'


import FishbowlOutline from 'mdi-material-ui/FishbowlOutline'
import Fish from 'mdi-material-ui/Fish'
import AccountCog from 'mdi-material-ui/AccountCog'
import AccountEdit from 'mdi-material-ui/AccountEdit'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
const date: Date = new Date();
const Admin = (): VerticalNavItemsType => {
  return [

    {
      sectionTitle: 'Admin'
    },
    {
      title: 'Main Page',
      icon: HomeOutline,
      path: '/AdminHome'
    },
    {
      title: 'Pond Detail',
      icon: FishbowlOutline,
      path: '/AdminPondPage'
    },
    {
      title: 'Fish Detail',
      icon: Fish,
      path: '/AdminFishPage'
    },
    {
      title: 'Employee Detail',
      icon: AccountCog,
      path: '/AdminEmployeePage'
    },
    {
      title: 'Account Setting',
      icon: AccountEdit,
      path: '/account-settings/AdminAccount'
    },
    {
      title: 'Feedback',
      icon: AlertCircleOutline,
      path: '/AdminFeedback',
    },
  ]
}

export default Admin
