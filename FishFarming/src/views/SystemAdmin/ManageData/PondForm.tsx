// ** React Imports
import {forwardRef, useState, ElementType, ChangeEvent, SyntheticEvent } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button, { ButtonProps } from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

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
const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Expire' fullWidth {...props} />
})
const CustomInput2 = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Create Date' fullWidth {...props} />
})


const Pond = () => {
  const [date, setDate] = useState<Date | null | undefined>(null)
  const [openAlert, setOpenAlert] = useState<boolean>(true)
  const [imgSrc, setImgSrc] = useState<string>('/images/avatars/1.png')

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
      <CardHeader title='Pond Edit Information' titleTypographyProps={{ variant: 'h6' }} />
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
                <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('/images/avatars/1.png')}>
                  Reset
                </ResetButtonStyled>
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Allowed PNG or JPEG. Max size of 800K.
                </Typography>
              </Box>
            </Box>
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
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                label='Grange'
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
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                label='width'
                placeholder=''
                defaultValue='9682'
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
                label='Depth'
                placeholder=''
                defaultValue='2595'
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
                label='Length'
                placeholder=''
                defaultValue='5141'                
                InputProps={{
                }}
              />
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
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                label='Creater'
                placeholder=''
                defaultValue='4520 4903'
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
                label='Mannager'
                placeholder=''
                defaultValue='3103 3100'
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
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default Pond
