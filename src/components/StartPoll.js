import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Divider from "@material-ui/core/Divider";
import "./general.css";
import logoDrawing from "./../assets/logo-image.png";
import Link from "@material-ui/core/Link";
import ProgressDotUnfinished from "./../assets/progress-dot-unfinished.png";
import ProgressDotFinished from "./../assets/progress-dot-finished.png";
import vectorLeft from "./../assets/vector-left.png";
import vectorRight from "./../assets/vector-right.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#2EC4B6",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 320,
  },
  root: {
    width: 500,
  },
  title: {
    marginTop: "30px",
    fontFamily: "Futura",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    marginBottom: "10px",
  },
  top: {
    marginTop: "35px",
    textAlign: "center",
    padding: "10px",
    fontFamily: "Futura",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "24px",
    backgroundColor: "#E3E3E3",
    borderBottom: "0.6px solid grey",
    borderTop: "0.5px solid grey",
  },
  bottom: {
    position: "relative",
    bottom: "-70px",
  },
  progressBar: {
    marginTop: "23px",
    display: "flex",
    justifyContent: "spaces-between",
  },
  progressDot: {
    marginTop: theme.spacing(0.3),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: "11.78px",
    height: "12px",
    left: "239px",
    top: "101px",
  },
  vector: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
}));

function StartPoll() {
  const classes = useStyles();
  const [value, setValue] = useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container className={classes.top}>
        <Grid item xs={12}>
          Start a Poll
        </Grid>
      </Grid>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <div className={classes.progressBar}>
            <img src={ProgressDotFinished} className={classes.progressDot} />
            <img src={ProgressDotUnfinished} className={classes.progressDot} />
            <img src={ProgressDotUnfinished} className={classes.progressDot} />
            <img src={ProgressDotUnfinished} className={classes.progressDot} />
            <Link href="/OptionsPoll">
              <img type="submit" src={vectorRight} className={classes.vector} />
            </Link>
          </div>
          <div className={classes.title}>What's on your mind?</div>
          <form className={classes.form} noValidate>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  required
                  id="firstName"
                  label="Enter your question here"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    What category does it fall under?
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    fullWidth
                    id="demo-simple-select"
                    value="5"
                    onChange=""
                  >
                    <MenuItem>Music</MenuItem>
                    <MenuItem>Entertainment</MenuItem>
                    <MenuItem>Sports</MenuItem>
                    <MenuItem>Politics</MenuItem>
                    <MenuItem>Fashion</MenuItem>
                    <MenuItem>Lifestyle</MenuItem>
                    <MenuItem>Not Applicable</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </form>
          <img
            src={logoDrawing}
            width="234px"
            height="140px"
            top="138px"
            alt=""
            className={classes.bottom}
          />
          {/* Sample botton navigation bar */}
          {/* <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation> */}
        </div>
      </Container>
    </>
  );
}

export default StartPoll;
