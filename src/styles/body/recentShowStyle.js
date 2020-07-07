const recentShow = (theme) => ({
  itemRecentShow:{
    borderRadius: 10,
    position: "relative",
    backgroundColor: 'transparent',
    transition: "transform .3s",
    "&:hover":{
      transform: "scale(1.1)",
      cursor: "pointer"
    }
  },
  overlayRecentShow: {
    position: 'absolute',
    top: "52%",
    left: "50%",
    transform:" translate(-50%, -50%)",
    "& > *": {
      fontSize: "7rem"
    }
  },
  recentShowMain: {
    color: theme.palette.text.secondary
  }
})

export default recentShow