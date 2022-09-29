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

const FishInfo2 = () => {
  return (
    <Card>
      <CardHeader title='Fish Information' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
          <Grid item xs={12}>
          <ImgStyled src={'https://www.fmo.org.hk/uploads/yj1.jpg'} alt='Profile Pic' />
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
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Eng Name'
                placeholder=''
                defaultValue='Scortum barcoo'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Chi Name'
                placeholder=''
                defaultValue='寶石鱸'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Eng Description'
                placeholder=''
                defaultValue='This fish has a sturdy body and a small head. The body is brownish with darker blotches and darker fins.[3] The fish reaches a maximum length of about 50 cm'
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Chi Description'
                placeholder=''
                defaultValue='為輻鰭魚綱鱸形目鱸亞目鯻科的其中一種，由於其體側很多大小不等黑色閃亮的橢圓形斑，宛如鑲嵌在魚身體表的黑寶石，故稱之為寶石魚。是原產澳洲的食用淡水魚，目前為昆士蘭地區六大重要淡水魚類之一，具有成長快、雜食性及耐低溶氧等特點，種魚性成熟需要4年。因牠們具有很强的环境适应力和高度的抗病能力，故被引進世界各地，成為享负盛名的食用魚。'
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
                defaultValue='Perciformes'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Family'
                placeholder=''
                defaultValue='Terapontidae'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='SubFamily'
                placeholder=''
                defaultValue='/'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                label='Genus'
                placeholder=''
                defaultValue='Scortum'                
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
                defaultValue='10'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>          
              <TextField
                fullWidth
                label='Maximum Temperature'
                placeholder=''
                defaultValue='38'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Minimum O2'
                placeholder=''
                defaultValue='2.5'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Minimum PH'
                placeholder=''
                defaultValue='7.5'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Maximum PH'
                placeholder=''
                defaultValue='8'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Minimum Depth'
                placeholder=''
                defaultValue='/'                
                InputProps={{
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Maximum Depth'
                placeholder=''
                defaultValue='/'                
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


export default FishInfo2
