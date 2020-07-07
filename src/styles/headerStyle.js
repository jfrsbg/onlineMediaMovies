
const header = (theme) => (
  {
    mainCard: {
      position: 'relative',
      backgroundColor: "transparent",
      borderRadius: "0px 0px 30px 30px",
    },
    mainOverlay: {
        position: 'absolute',
        width: "100%",
        height: "100%",
        top: '20px',
        color: theme.palette.text.primary,
        fontSize: "1.5rem",
        padding: "2.5rem 2rem 1rem 7.5rem",
        fontWeight: "bold"
    },
    menu: {
      fontWeight: "bold",
      fontSize: "1.3rem",
      "& > *": {
        marginLeft: "1rem",
        transition: "transform .3s",
      },
      "& > *:hover":{
        transform: "scale(1.2)",
        cursor: "pointer"
      }
    },
    bottomHeader:{
      padding: "8.5rem 0rem 0rem 1.2rem",
    },
    containerBottomRigth: {
      left: "60%", 
      top: "72%", 
      position: "absolute",
      height: 0
    },
    containerBottomLeft: {
      left: "9%", 
      top: "35%", 
      position: "absolute",
      height: 0
    },
    cardBottom: {
      marginRight: "2rem",
      borderRadius: 10,
      backgroundColor: "transparent",
      position: "relative",
      transition: "transform .3s",
      "&:hover":{
        transform: "scale(1.2)",
        cursor: "pointer"
      }
    },
    cardBottomOverlay: {
      position: 'absolute',
      top: "55%",
      left: "50%",
      transform:" translate(-50%, -50%)",
      margin: "auto",
      "& > *":{
        fontSize: '4rem',
      }
    },
    watchNowButton: {
      width: "16rem", 
      height: '4.5rem',
      border: "3px solid #2db6d2",
      m: 1,
      borderRadius: 200,
      marginTop: 2.5,
      transition: "transform .3s",
      "&:hover":{
        transform: "scale(1.2)"
      }
    }
  }
)

export default header