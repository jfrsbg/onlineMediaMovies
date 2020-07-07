import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import adastra from 'images/recentp1.png'
import starwars from 'images/recentp2.png'

export default function RecentPlaying(props){
  
  return (
    <Grid item xs={8} className={props.classes.recentPlayingMain}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">
            Recent Playing
          </Typography>
        </Grid>
      </Grid>

      <ItemRecentPlaying classes={props.classes} img={adastra} title="Notting Hill" date="20 April 2020"/>
      <ItemRecentPlaying classes={props.classes} img={starwars} title="Star Wars" date="20 April 2020"/>
      <ItemRecentPlaying classes={props.classes} img={adastra} title="Notting Hill" date="20 April 2020"/>
      <ItemRecentPlaying classes={props.classes} img={starwars} title="Star Wars" date="20 April 2020"/>
      
    </Grid>
  )
}

function ItemRecentPlaying(props){
  return (
    <Grid container spacing={3} style={{paddingTop: 20}}>
      <Grid item xs={2}>
        <Card className={props.classes.itemRecentPlaying}>
          <CardMedia image={props.img}  component="img" style={{width: "100%"}} title="show"/>
        </Card>
      </Grid>

      <Grid item xs={7} className={props.classes.recentPlayingText}>
        <Typography variant="h5" style={{fontWeight: "bold"}}>
          {props.title}
        </Typography>
        <Typography variant="subtitle1">
          {props.date}
        </Typography>
      </Grid>

      <Grid item xs={3}>
        <Typography variant="h5" style={{fontWeight: "bold"}}>
          02:40 PM
        </Typography>
        <Typography variant="subtitle1" >
          50 min
        </Typography>
      </Grid>
    </Grid>
  )
}