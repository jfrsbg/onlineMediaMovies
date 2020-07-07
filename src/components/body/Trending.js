import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

import adastra from 'images/trending1.png'
import joker from 'images/trending2.png'
import toro from 'images/trending3.png'

export default function Trending(props){
  //Trending
  return (
    <Grid container spacing={3} className={props.classes.trendingMain}>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={10}>
            <Typography variant="h5">
              Trending
            </Typography>
          </Grid>

          <Grid item xs={2} >
            <Typography variant="h5" style={{textAlign: "right"}}>
              More >  
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      
      <CardTrending classes={props.classes} image={adastra}/>
      <CardTrending classes={props.classes} image={joker}/>
      <CardTrending classes={props.classes} image={toro}/>
    </Grid>
  )
}

function CardTrending(props){
  return (
    <Grid item xs={4}>
      <Card className={props.classes.cardTrending}>
        <div className={props.classes.trendingOverlay}>
          <Icon color="primary">play_circle_outline</Icon>
        </div>
      
        <CardMedia image={props.image}  component="img" className={props.classes.trendingImage}/>
      </Card>
    </Grid>
  )
}