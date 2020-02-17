import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import defaultImg from "../images/etc3.jpeg";

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${props => (props.img ? props.img : defaultImg)}) center/cover
    no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Hero = ({ img, title, subtitle }) => {
  const classes = useStyles();
  return (
    <StyledHero img={img}>
      <div className={classes.wrapper}>
        <h3 className={classes.title}>{title}</h3>
        {subtitle ? (
          <>
            <hr className={classes.hr} />
            <h4 className={classes.subtitle}>{subtitle}</h4>
          </>
        ) : (
          ""
        )}
      </div>
    </StyledHero>
  );
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  wrapper: {
    ...theme.fonts.title,
    padding: "1rem 3rem",
    background: "rgba(250, 250, 250, 0.4)",
    textTransform: "capitalize"
  },
  title: {
    fontSize: "3.5rem",
    margin: "1rem auto"
  },
  subtitle: {
    fontSize: "2rem",
    margin: "1rem auto"
  }
}));

Hero.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default Hero;
