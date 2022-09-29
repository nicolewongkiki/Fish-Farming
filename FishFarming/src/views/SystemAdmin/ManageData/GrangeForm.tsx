import { forwardRef, useState} from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const CustomInput2 = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Create Date' fullWidth {...props} />
})

const GrangeForm = () => {
  const [date, setDate] = useState<Date | null | undefined>(null)

  return (
    <Card>
      <CardHeader title='Grange Edit Form' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
          <Grid item xs={12}>
              <TextField
                fullWidth
                label='ID'
                placeholder=''
                defaultValue='39034006'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12}  md={8}>
              <TextField
                fullWidth
                label='Name'
                placeholder=''
                defaultValue='Grange A'   
                InputProps={{
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
                label='Latitude'
                placeholder=''
                defaultValue='22.265280' 
                InputProps={{
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
                label='Longitude'
                placeholder=''
                defaultValue='114.239100' 
                InputProps={{
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
                label='Address'
                placeholder=''
                defaultValue='30 Shing Tai Rd, Chai Wan,Hong Kong'   
                InputProps={{
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
                label='Contact'
                placeholder='(852) 1234-5678'
                defaultValue='25958113' 
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

export default GrangeForm
