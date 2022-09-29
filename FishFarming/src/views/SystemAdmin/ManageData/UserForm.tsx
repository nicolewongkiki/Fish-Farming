import { forwardRef, useState} from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'

import DatePicker from 'react-datepicker'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
// ** Icons Imports
import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import Select from '@mui/material/Select'

const CustomInput2 = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Create Date' fullWidth {...props} />
})

const UserForm = () => {
  const [date, setDate] = useState<Date | null | undefined>(null)

  return (
    <Card>
      <CardHeader title='User Edit Form' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
          <Grid item xs={12}>
              <TextField
                fullWidth
                label='ID'
                placeholder='45014903'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AccountOutline />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}  md={8}>
              <TextField
                fullWidth
                label='First Name'
                placeholder=''
                defaultValue='Hong Chit'   
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AccountOutline />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button type='submit' variant='contained' size='large'>
                Change
              </Button>              
            </Grid>
            <Grid item xs={12}  md={8}>
              <TextField
                fullWidth
                label='Last Name'
                placeholder=''
                defaultValue='Wong'   
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AccountOutline />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button type='submit' variant='contained' size='large'>
                Change
              </Button>              
            </Grid>
            <Grid item xs={12}  md={8}>
              <TextField
                fullWidth
                label='Nick Name'
                placeholder=''
                defaultValue='Master Chit Chit'   
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AccountOutline />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button type='submit' variant='contained' size='large'>
                Change
              </Button>              
            </Grid>
            <Grid item xs={12}  md={8}>
            <TextField
                fullWidth
                type='number'
                label='Phone No.'
                placeholder='(852) 1234-5678'
                defaultValue='41234567' 
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Phone />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button type='submit' variant='contained' size='large'>
                Change
              </Button>              
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                type='email'
                label='Email'
                placeholder='carterleonard@gmail.com'
                defaultValue='hcwong@vtc.edu.hk'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <EmailOutline />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button type='submit' variant='contained' size='large'>
                Change
              </Button>              
            </Grid>
            <Grid item xs={12}  md={8}>
              <TextField
                fullWidth
                label='Password'
                placeholder=''
                defaultValue='1234'   
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button type='submit' variant='contained' size='large'>
                Change
              </Button>              
            </Grid>         
            <Grid item xs={12} md={8}>
            <FormControl fullWidth>
              <InputLabel>Session</InputLabel>
              <Select label='Session' defaultValue='Admin'>
                <MenuItem value='Admin'>Admin</MenuItem>
                <MenuItem value='Employee'>Employee</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <Button type='submit' variant='contained' size='large'>
                Change
              </Button>              
            </Grid>
            <Grid item xs={12} sm={8}>
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
            <Grid item xs={12} md={4}>
            <Button type='submit' variant='contained' size='large'>
                Change
              </Button>              
            </Grid>
            <Grid item xs={12}  md={8}>
              <TextField
                fullWidth
                label='Manage'
                placeholder=''
                defaultValue='Pond A, Pond B'   
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button type='submit' variant='contained' size='large'>
                Change
              </Button>              
            </Grid>    
            <Grid item xs={12}>
              <Button type='submit' variant='contained' size='large'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default UserForm
