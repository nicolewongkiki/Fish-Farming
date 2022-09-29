// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const BestPond = () => {
  return (
    <Card>
      <CardHeader title='Fish Information' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
          <Grid item xs={12}>
              <TextField
                fullWidth
                label='Photo'
                placeholder=''
                defaultValue=''
                InputProps={{
                }}
              />
            </Grid>
          <Grid item xs={12}>
              <TextField
                fullWidth
                label='Pond'
                placeholder=''
                defaultValue='Pond A'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type='number'
                label='Quality'
                placeholder=''
                defaultValue='10'
                InputProps={{
                }}
              />
            </Grid>

          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default BestPond
