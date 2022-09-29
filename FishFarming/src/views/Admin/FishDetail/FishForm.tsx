
// ** React Imports
import { useState, ElementType, ChangeEvent } from 'react'
// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button, { ButtonProps } from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
// ** Icons Imports
import Select from '@mui/material/Select'
const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)<ButtonProps & { component?: ElementType; htmlFor?: string }>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const FishForm = () => {
  const [imgSrc, setImgSrc] = useState<string>('https://upload.wikimedia.org/wikipedia/commons/0/07/LabeoCalbasuDay.jpg')
  const [date, setDate] = useState<Date | null | undefined>(null)

  const onChange = (file: ChangeEvent) => {
    const reader = new FileReader()
    const { files } = file.target as HTMLInputElement
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result as string)

      reader.readAsDataURL(files[0])
    }
  }

  return (
    <Card>
      <CardHeader title='Fish Edit Information' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
              <Box>
                <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                  Upload New Photo
                  <input
                    hidden
                    type='file'
                    onChange={onChange}
                    accept='image/png, image/jpeg'
                    id='account-settings-upload-image'
                  />
                </ButtonStyled>
                <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('https://upload.wikimedia.org/wikipedia/commons/0/07/LabeoCalbasuDay.jpg')}>
                  Reset
                </ResetButtonStyled>
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Allowed PNG or JPEG. Max size of 800K.
                </Typography>
              </Box>
            </Box>
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
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                label='Eng Name'
                placeholder=''
                defaultValue='Cirrhinus molitorella'
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
              <TextField
                fullWidth
                label='Chi Name'
                placeholder=''
                defaultValue='鲮魚'
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
              <TextField
                fullWidth
                label='Eng Description'
                placeholder=''
                defaultValue='Due to low cost of production, the fish is mainly consumed by the poor and locally consumed; it is mostly sold live and eaten fresh, but can be dried and salted. Increase of hunting has threatened the number of mud carp.'
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
              <TextField
                fullWidth
                label='Chi Description'
                placeholder=''
                defaultValue='大型食用魚，且有經濟價值。適合煎、烤、炸、紅燒及糖醋等各種烹飪方法食用（如鯪魚球、煎釀鯪魚等），已商業化養殖。'
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
              <TextField
                fullWidth
                label='Kingdom'
                placeholder=''
                defaultValue='Animalia'
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
              <TextField
                fullWidth
                label='Phylum'
                placeholder=''
                defaultValue='Chordata'                
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
              <TextField
                fullWidth
                label='Class'
                placeholder=''
                defaultValue='Actinopterygii'                
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
              <TextField
                fullWidth
                label='Order'
                placeholder=''
                defaultValue='Cypriniformes'                
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
              <TextField
                fullWidth
                label='Family'
                placeholder=''
                defaultValue='Cyprinidae'                
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
              <TextField
                fullWidth
                label='SubFamily'
                placeholder=''
                defaultValue='Labeoninae'                
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
              <TextField
                fullWidth
                label='Genus'
                placeholder=''
                defaultValue='Cirrhinus'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
            <Button type='submit' variant='contained' size='large'>
                Change
              </Button>              
            </Grid>
            <Grid item xs={12} md={12}>
            Environment:              
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                label='Minimum Temperature'
                placeholder=''
                defaultValue='15'                
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
              <TextField
                fullWidth
                label='Maximum Temperature'
                placeholder=''
                defaultValue='30'                
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
              <TextField
                fullWidth
                label='Minimum O2'
                placeholder=''
                defaultValue='0.24'                
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
              <TextField
                fullWidth
                label='Minimum PH'
                placeholder=''
                defaultValue='3'                
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
              <TextField
                fullWidth
                label='Maximum PH'
                placeholder=''
                defaultValue='7'                
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
              <TextField
                fullWidth
                label='Minimum Depth'
                placeholder=''
                defaultValue='1.2'                
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
              <TextField
                fullWidth
                label='Maximum Depth'
                placeholder=''
                defaultValue='1.5'                
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
            </Grid>
            <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Actions</InputLabel>
              <Select label='Actions' defaultValue='Add'>
                <MenuItem value='Add'>Add</MenuItem>
                <MenuItem value='Delete'>Delete</MenuItem>
                <MenuItem value='Update'>Update</MenuItem>
              </Select>
            </FormControl>
              </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Current Quanlity'
                placeholder=''
                defaultValue='5000'  
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' size='large'>
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FishForm
