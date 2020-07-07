import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import WatchNowButton from './WatchNowButton'

import bg from 'images/headerbg.png'
import inception from 'images/header1.png'
import cars from 'images/header2.png'
import beauty from 'images/header3.png'

export default function Header(props){

  return (
    <Grid container>
      <Grid item xs={12} >
        <Card className={props.classes.mainCard}>
          <CardMedia image={bg} style={{width: "100%"}} title="Wonder Woman" component="img"/>

          <div className={props.classes.mainOverlay}>
            {/** Top Menu*/}
            <Grid container alignItems="center">
              <Grid item xs={6}>
                iVISION
              </Grid>

              <Grid item xs={6}>
                <Grid container className={props.classes.menu}>
                  <Grid item xs={2}>
                    Shows
                  </Grid>

                  <Grid item xs={2}>
                    Movies
                  </Grid>

                  <Grid item xs={2}>
                    Live TV
                  </Grid>

                  <Grid item xs={2}>
                    Genres
                  </Grid>

                  <Grid item xs={2}>
                    Songs
                  </Grid>
                </Grid>
              </Grid>
            </Grid>


            {/**Bottom */}
            <Grid container className={props.classes.bottomHeader}>
              <Grid item xs={7} className={props.classes.containerBottomLeft}>
                <Typography variant="h4" style={{fontWeight: "bold"}} gutterBottom>
                  Premiere now
                </Typography>

                <Typography variant="h3" style={{fontWeight: "bold"}} gutterBottom>
                  Wonder Woman 1984
                </Typography>

                <Typography variant="h6" gutterBottom>
                  Action
                </Typography>

                
                <WatchNowButton classes={props.classes.watchNowButton}/>
                  
              </Grid>

              <Grid item xs={5} className={props.classes.containerBottomRigth}>
                <Grid container>
                  
                  <CardBottom bg={inception} title="inception" classes={props.classes}/>
                  <CardBottom bg={cars} title="cars" classes={props.classes}/>
                  <CardBottom bg={beauty} title="Beaty and the Beast" classes={props.classes}/>
                  
                </Grid>
                
              </Grid>
            </Grid>
            
          </div>
        </Card>
        
      </Grid>
    </Grid>
  )
}

function CardBottom(props){
  return (
    <Grid item xs={4}>
      <Card className={props.classes.cardBottom}>  
        <div className={props.classes.cardBottomOverlay}>
          <Icon color="primary">play_circle_outline</Icon>
        </div>
      
        <CardMedia image={props.bg} style={{width: "100%"}} component="img"></CardMedia>
      </Card>
    </Grid>
    
  )
}