import { forwardRef, useState} from 'react'
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'

import DatePicker from 'react-datepicker'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Icons Imports
import Select from '@mui/material/Select'

const CustomInput2 = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Create Date' fullWidth {...props} />
})

const UserInfo = () => {
  const [date, setDate] = useState<Date | null | undefined>(null)
  return (
    <Card>
      <CardHeader title='User Information' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
          <Grid item xs={12}>
              <TextField
                fullWidth
                label='ID'
                placeholder=''
                defaultValue='45014903'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12}  md={6}>
              <TextField
                fullWidth
                label='First Name'
                placeholder=''
                defaultValue='Hong Chit'   
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12}  md={6}>
              <TextField
                fullWidth
                label='Last Name'
                placeholder=''
                defaultValue='Wong'   
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12}  md={6}>
              <TextField
                fullWidth
                label='Nick Name'
                placeholder=''
                defaultValue='Master Chit Chit'   
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12}  md={6}>
            <TextField
                fullWidth
                type='number'
                label='Phone No.'
                placeholder='(852) 1234-5678'
                defaultValue='41234567' 
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type='email'
                label='Email'
                placeholder='carterleonard@gmail.com'
                defaultValue='hcwong@vtc.edu.hk'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12}  md={6}>
              <TextField
                fullWidth
                label='Password'
                placeholder=''
                defaultValue='1234'   
                InputProps={{
                }}
              />
            </Grid>     
            <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Session</InputLabel>
              <Select label='Session' defaultValue='Admin'>
                <MenuItem value='Admin'>Admin</MenuItem>
                <MenuItem value='Employee'>Employee</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
            <DatePickerWrapper>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                id='account-settings-date'
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput2 />}
                onChange={(date: Date) => setDate(date)}
              />
            </DatePickerWrapper>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Manage'
                placeholder=''
                defaultValue='Pond A, Pond B'   
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' size='large'>
                Edit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default UserInfo
