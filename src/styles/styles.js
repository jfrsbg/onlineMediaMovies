import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import index from './indexStyle'
import header from './headerStyle'
import trending from './body/trendingStyle'
import recentPlaying from './body/recentPlayingStyle'
import recentShow from './body/recentShowStyle'
import comingSoon from './body/comingSoonStyle'

const useStyles = makeStyles((theme) => ({
  ...index,
  ...header(theme),
  ...trending(theme),
  ...recentPlaying(theme),
  ...recentShow(theme),
  ...comingSoon(theme),
}));

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    text: {
      primary: 'white',
      secondary: '#627691'
    }
  }
});

export default useStyles
