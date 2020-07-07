const recentPlaying = (theme) => ({
  itemRecentPlaying: {
    width: "100%", 
    backgroundColor: "transparent", 
    borderRadius: 10,
    "&:hover":{
      cursor: "pointer"
    }
  },
  recentPlayingMain: {
    color: theme.palette.text.secondary
  },
  recentPlayingText: {
    position: "relative", 
    flexDirection: "column"
  }
})

export default recentPlaying