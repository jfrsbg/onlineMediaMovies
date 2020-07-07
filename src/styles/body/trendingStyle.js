const trending = (theme) => ({
  cardTrending: {
    borderRadius: 20,
    backgroundColor: "transparent",
    position: "relative",
    transition: "transform .3s",
    "&:hover":{
      transform: "scale(1.1)",
      cursor: "pointer"
    }
  },
  trendingImage: {
    width: "100%"
  },
  trendingOverlay:{
    position: 'absolute',
    top: "50%",
    left: "50%",
    transform:" translate(-50%, -50%)",
    "& > *": {
      fontSize: "7rem"
    }
  },
  trendingMain: {
    color: theme.palette.text.secondary,
  }
})

export default trending