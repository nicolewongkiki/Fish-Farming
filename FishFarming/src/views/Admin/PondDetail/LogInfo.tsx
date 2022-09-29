import { forwardRef, useState} from 'react'
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

import DatePicker from 'react-datepicker'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const CustomInput2 = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Record Date' fullWidth {...props} />
})
const LogInfo = () => {
  const [date, setDate] = useState<Date | null | undefined>(null)
  return (
    <Card>
      <CardHeader title='Change Log Information' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
          <Grid item xs={12}>
              <TextField
                fullWidth
                label='ID'
                placeholder=''
                defaultValue='49154522'
                InputProps={{
                }}
              />
          </Grid>
          <Grid item xs={12}>
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
                label='Action Taken'
                placeholder=''
                defaultValue='3103 3100'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                fullWidth
                label='Description'
                placeholder=''
                defaultValue='5 fishes died'
                InputProps={{
                }}
              />
            </Grid>
          <Grid item xs={12}>
            <TextField
                fullWidth
                label='Taken By'
                placeholder=''
                defaultValue='3103 3100'
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

export default LogInfo
