
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import AccountEdit from 'mdi-material-ui/AccountEdit'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const SystemAdmin = (): VerticalNavItemsType => {
  return [
    {
      sectionTitle: 'System Admin'
    },
    {
      title: 'Main Page',
      icon: HomeOutline,
      path: '/SystemAdminIndex'
    },
    {
      title: 'Manage Data',
      icon: AccountEdit,
      path: '/ManageData'
    },
    {
      title: 'Account Settings',
      icon: AccountEdit,
      path: '/account-settings/SystemAdminAccount'
    },
    {
      title: 'Feed back',
      icon: AlertCircleOutline,
      path: '/SystemAdminFeedback',
    }

  ]
}

export default SystemAdmin
