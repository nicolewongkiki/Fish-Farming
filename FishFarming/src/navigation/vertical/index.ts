import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import CardHeader from '@mui/material/CardHeader'
import Card from '@mui/material/Card'
// ** MUI Imports
import Grid from '@mui/material/Grid'

import FishbowlOutline from 'mdi-material-ui/FishbowlOutline'
import Fish from 'mdi-material-ui/Fish'
import AccountCog from 'mdi-material-ui/AccountCog'
import AccountEdit from 'mdi-material-ui/AccountEdit'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
const date: Date = new Date();
const navigation = (): VerticalNavItemsType => {
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

export default navigation
