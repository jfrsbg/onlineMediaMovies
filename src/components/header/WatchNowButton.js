import React from 'react';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

export default class WatchNowButton extends React.Component{

  render(){
    return (
      
        <Box className={this.props.classes} m={1}
        >
          <ButtonBase style={{width: '100%', height: '100%',borderRadius: 30}}>
            <Typography variant='h5'  style={{fontWeight: "bold"}}>
              Watch Now
            </Typography>
          </ButtonBase>
        </Box>
      
      
    )
  }
}
