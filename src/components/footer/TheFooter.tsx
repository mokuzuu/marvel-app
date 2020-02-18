import React from "react";
import { makeStyles } from "@material-ui/core";
import variables from "styles/variables";
import FooterButton from "./TheFooterButton";
interface IProps {
  navs: { title: string; icon: JSX.Element; to: string }[];
}
export default (props: IProps) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      {props.navs.map((nav, key) => (
        <FooterButton icon={nav.icon} to={nav.to} key={key} />
      ))}
    </footer>
  );
};

const useStyles = makeStyles(theme => ({
  footer: {
    zIndex: variables.zIndex.footer,
    position: "fixed",
    bottom: "0",
    width: "100%",
    height: variables.footer.height,
    display: "flex",
    alignItems: "center"
  }
}));
