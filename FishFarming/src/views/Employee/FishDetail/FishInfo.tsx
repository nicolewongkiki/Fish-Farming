// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const FishInfo = () => {
  return (
    <Card>
      <CardHeader title='Fish Information' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
          <Grid item xs={12}>
          <ImgStyled src={'https://upload.wikimedia.org/wikipedia/commons/0/07/LabeoCalbasuDay.jpg'} alt='Profile Pic' />
            </Grid>
          <Grid item xs={12}>
              <TextField
                fullWidth
                label='ID'
                placeholder=''
                defaultValue='63044d17071959ac3d776be7'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Eng Name'
                placeholder=''
                defaultValue='Cirrhinus molitorella'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Chi Name'
                placeholder=''
                defaultValue='鲮魚'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Eng Description'
                placeholder=''
                defaultValue='Due to low cost of production, the fish is mainly consumed by the poor and locally consumed; it is mostly sold live and eaten fresh, but can be dried and salted. Increase of hunting has threatened the number of mud carp.'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Chi Description'
                placeholder=''
                defaultValue='大型食用魚，且有經濟價值。適合煎、烤、炸、紅燒及糖醋等各種烹飪方法食用（如鯪魚球、煎釀鯪魚等），已商業化養殖。'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Kingdom'
                placeholder=''
                defaultValue='Animalia'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Phylum'
                placeholder=''
                defaultValue='Chordata'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Class'
                placeholder=''
                defaultValue='Actinopterygii'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Order'
                placeholder=''
                defaultValue='Cypriniformes'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Family'
                placeholder=''
                defaultValue='Cyprinidae'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='SubFamily'
                placeholder=''
                defaultValue='Labeoninae'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Genus'
                placeholder=''
                defaultValue='Cirrhinus'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={12}>
            Environment:              
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Minimum Temperature'
                placeholder=''
                defaultValue='15'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>          
              <TextField
                fullWidth
                label='Maximum Temperature'
                placeholder=''
                defaultValue='30'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Minimum O2'
                placeholder=''
                defaultValue='0.24'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Minimum PH'
                placeholder=''
                defaultValue='3'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Maximum PH'
                placeholder=''
                defaultValue='7'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Minimum Depth'
                placeholder=''
                defaultValue='1.2'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Maximum Depth'
                placeholder=''
                defaultValue='1.5'                
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

export default FishInfo
