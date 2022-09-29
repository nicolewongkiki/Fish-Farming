
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

const FishForm2 = () => {
  const [imgSrc, setImgSrc] = useState<string>('https://www.fmo.org.hk/uploads/yj1.jpg')
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
                <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('https://www.fmo.org.hk/uploads/yj1.jpg')}>
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
                defaultValue='63044ea5071959ac3d776be8'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                label='Eng Name'
                placeholder=''
                defaultValue='Scortum barcoo'
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
                defaultValue='寶石鱸'
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
                defaultValue='This fish has a sturdy body and a small head. The body is brownish with darker blotches and darker fins.[3] The fish reaches a maximum length of about 50 cm'
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
                defaultValue='為輻鰭魚綱鱸形目鱸亞目鯻科的其中一種，由於其體側很多大小不等黑色閃亮的橢圓形斑，宛如鑲嵌在魚身體表的黑寶石，故稱之為寶石魚。是原產澳洲的食用淡水魚，目前為昆士蘭地區六大重要淡水魚類之一，具有成長快、雜食性及耐低溶氧等特點，種魚性成熟需要4年。因牠們具有很强的环境适应力和高度的抗病能力，故被引進世界各地，成為享负盛名的食用魚。'
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
                defaultValue='Perciformes'                
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
                defaultValue='Terapontidae'                
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
                defaultValue='/'                
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
                defaultValue='Scortum'                
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
                defaultValue='10'                
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
                defaultValue='38'                
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
                defaultValue='2.5'                
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
                defaultValue='7.5'                
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
                defaultValue='8'                
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
                defaultValue='/'                
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
                defaultValue='/'                
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

export default FishForm2
