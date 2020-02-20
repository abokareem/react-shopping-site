import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "./SectionTitle";
import { Link } from "react-router-dom";
import { withWorkshopConsumer } from "../context/WorkshopContext";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

// const workshop = [
//   {
//     id: "1",
//     level: "beginner",
//     name: "Making Coaster",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, possimus!",
//     images: [etc1, etc2]
//   },
//   {
//     id: "2",
//     level: "all level",
//     name: "Plant Hanger DIY",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, possimus!",
//     images: [etc2, etc1]
//   }
// ];

const MakeYourOwn = ({ context }) => {
  const classes = useStyles();
  const { workshops, availableWorkshops, loading } = context;

  return (
    <div className={classes.container}>
      <SectionTitle title="Make Your Own" />
      <p className={classes.description}>
        Do you want to make your own Macramé? Try our courses!!
      </p>
      <div className={classes.sectionBody}>
        {loading ? (
          <CircularProgress color="secondary" size="4rem" />
        ) : (
          workshops.map(item => (
            <Card key={item.id} className={classes.card}>
              <CardContent>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.level}
                >
                  {item.level}
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.name}
                >
                  {item.name}
                </Typography>
                <Typography variant="body2" component="p">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  to={`/products/workshop${item.id}`}
                  className={classes.link}
                >
                  <Button size="small">Learn More</Button>
                </Link>
              </CardActions>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  description: {
    textAlign: "center"
  },
  card: {
    maxWidth: "18rem",
    minWidth: "15rem",
    margin: "1rem",
    background: theme.palette.secondary.light
  },
  level: {
    textTransform: "uppercase",
    color: theme.palette.text.secondary
  },
  name: {
    margin: "0.5rem auto"
  }
}));

export default withWorkshopConsumer(MakeYourOwn);