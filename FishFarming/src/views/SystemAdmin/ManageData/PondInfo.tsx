// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const PondInfo = () => {
  return (
    <Card>
      <CardHeader title='Pond Information' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Photo'
                placeholder='Leonard Carter'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='ID'
                placeholder=''
                defaultValue='39014501'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Code'
                placeholder=''
                defaultValue='Pond A'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Grange'
                placeholder=''
                defaultValue='Grange A'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='width'
                placeholder=''
                defaultValue='9682'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Depth'
                placeholder=''
                defaultValue='2595'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Length'
                placeholder=''
                defaultValue='5141'                
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

export default PondInfo
