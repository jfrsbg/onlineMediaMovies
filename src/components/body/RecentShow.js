import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import recentshow from 'images/recentshow.png'

export default function RecentShow(props){
  return (
    <Grid item xs={4} className={props.classes.recentShowMain}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h5" gutterBottom>
            Recent Show
          </Typography>
        </Grid>

        <Grid item xs={6} style={{textAlign: "right"}}>
          <Typography variant="h5" gutterBottom>
            More >
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <ItemRecentShow classes={props.classes} img={recentshow}/>
        <ItemRecentShow classes={props.classes} img={recentshow}/>
      </Grid>
    </Grid>
  )
}

function ItemRecentShow(props){
  return (
    <Grid item xs={12} style={{paddingTop: 25}}>
      <Card className={props.classes.itemRecentShow}>
        <div className={props.classes.overlayRecentShow}>
          <Icon color="primary">play_circle_outline</Icon>
        </div>

        <CardMedia image={props.img}  component="img" style={{width: "100%"}} title="show"/>
      </Card>
    </Grid>
  )
}