// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'

// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Expire' fullWidth {...props} />
})

const Feed = () => {
  // ** State
  const [date, setDate] = useState<Date | null | undefined>(null)

  return (
    <Card>
<CardHeader title='Reply' titleTypographyProps={{ variant: 'h6' }} />
<CardContent>
<form>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8 }}>
          <h6>If you have any comments, please fill in the comments in the box below.   We will seriously consider it to provider it to provide the best service quality.</h6>
            <TextField
              fullWidth
              multiline
              label='Feedback'
              minRows={2}
              placeholder='In less 2000 words'
              defaultValue='XXX'
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }}>
              Send
            </Button>
            <Button type='reset' variant='outlined' color='secondary' onClick={() => setDate(null)}>
              Reset
            </Button>
  </Grid>
        </Grid>
      </form>
</CardContent>
</Card>

  )
}

export default Feed
