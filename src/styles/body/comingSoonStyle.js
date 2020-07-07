const comingSoon = (theme) => ({
  comingSoonCard: {
    padding: "2rem 0rem 2rem 0rem",
    marginTop: 20,
    borderRadius: 15,
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "&:hover": {
      cursor: "pointer"
    }
  },
  comingSoonImageCard: { 
    backgroundColor: "transparent", 
    borderRadius: 10,
  },
  comingSoonHeder: {
    color: theme.palette.text.secondary,
  }
})

export default comingSoon