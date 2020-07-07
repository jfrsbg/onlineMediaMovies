import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import popeye from 'images/popeye.png'
import deserter from 'images/deserter.png'

export default function ComingSoon(props){  
  return (
    <Grid item xs={3} className={props.classes.comingSoonHeder}>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h5" >
            Coming Soon
          </Typography>
        </Grid>

        <Grid item xs={6} style={{textAlign: "right"}}>
          <Typography variant="h5" >
            {"More >"}
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <ComingSoonItem classes={props.classes} title="Nothing Hill" date="20 April 2020" img={popeye}/>
        <ComingSoonItem classes={props.classes} title="Nothing Hill" date="20 April 2020" img={deserter}/>
        <ComingSoonItem classes={props.classes} title="Nothing Hill" date="20 April 2020" img={popeye}/>
        <ComingSoonItem classes={props.classes} title="Nothing Hill" date="20 April 2020" img={deserter}/>
      </Grid>
    </Grid>
  )
}

function ComingSoonItem(props){
  return (
    <Grid item xs={12} style={{position: "relative"}}>          
      <Card className={props.classes.comingSoonCard}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={4}>
            <Card className={props.classes.comingSoonImageCard}>
              <CardMedia image={props.img}  component="img" style={{width: "100%"}} title="titulo"/>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h5" style={{fontWeight: "bold"}}>
              {props.title}
            </Typography>

            <Typography variant="caption" >
              Premiere in
            </Typography>

            <Typography variant="subtitle1">
              {props.date}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  )
}