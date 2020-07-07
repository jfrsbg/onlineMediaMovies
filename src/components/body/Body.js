import React from 'react';
import Grid from '@material-ui/core/Grid';

import Trending from 'components/body/Trending'
import RecentPlaying from 'components/body/RecentPlaying'
import RecentShow from 'components/body/RecentShow'
import ComingSoon from 'components/body/ComingSoon'

export default function Body(props){
  return (
    <React.Fragment>
      {/**body */}
      <Grid container spacing={5} style={{paddingTop: 60}}>
                  
        <Grid item xs={9}>
          <Trending classes={props.classes}/>

          <Grid container spacing={3} style={{paddingTop: 60}}>
            <RecentPlaying classes={props.classes}/>
        
            <RecentShow classes={props.classes}/>
          </Grid>
          
        </Grid>
        
        <ComingSoon classes={props.classes}/>
      </Grid>
    </React.Fragment>
  )
}

