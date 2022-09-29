// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'

// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Expire' fullWidth {...props} />
})

const FromUser = () => {
  // ** State
  const [date, setDate] = useState<Date | null | undefined>(null)

  return (
    <Card>
<CardHeader title='From User FeedBack' titleTypographyProps={{ variant: 'h6' }} />
<CardContent>
<form>
        <Grid container spacing={7}>
        <Grid item xs={12}>
              <TextField
                fullWidth
                label='ID'
                placeholder=''
                defaultValue='39024107'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12}  md={4}>
              <TextField
                fullWidth
                label='First Name'
                placeholder=''
                defaultValue='Robert'   
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12}  md={4}>
              <TextField
                fullWidth
                label='Last Name'
                placeholder=''
                defaultValue='Chan'   
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12}  md={4}>
              <TextField
                fullWidth
                label='Nick Name'
                placeholder=''
                defaultValue='Mr Chan'   
                InputProps={{
                }}
              />
            </Grid>
          <Grid item xs={12} sx={{ marginTop: 4.8 }}>
            <TextField
              fullWidth
              multiline
              label='Feedback'
              minRows={2}
              placeholder='In less 2000 words'
              defaultValue='XXX'
            />
          </Grid>
        </Grid>
      </form>
</CardContent>
</Card>

  )
}

export default FromUser
