import React from "react";
import Header from "components/TheHeader";
import UseStylesGlobal from "styles/useStyles";
import { useTabletHook } from "hooks/isTablet";
import SideBarGroup from "components/sideBar/TheSideBarGroup";
import Footer from "components/footer/TheFooter";
import { makeStyles } from "@material-ui/core";
import variables from "styles/variables";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { routes } from "routes";
interface IProps {
  children: JSX.Element;
}
const navIcons = [
  {
    title: "List",
    to: routes.characters,
    icon: <ListAltIcon />
  }
];
export default (props: IProps) => {
  const globalClasses = UseStylesGlobal();
  const classes = useStyles();
  const isTablet = useTabletHook();
  return (
    <div className={globalClasses.app}>
      <Header />
      <main className={classes.main}>{props.children}</main>
      {isTablet ? (
        <Footer navs={navIcons} />
      ) : (
        <div className={classes.sizeBar}>
          <SideBarGroup navs={navIcons} />
        </div>
      )}
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  main: {
    paddingTop: variables.header.height,
    [theme.breakpoints.up("sm")]: {
      marginLeft: "180px"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: variables.footer.height
    }
  },
  sizeBar: {
    zIndex: variables.zIndex.sideBar,
    width: "180px",
    bottom: "0px",
    left: "0px",
    position: "fixed",
    top: "0px",
    margin: "0",
    padding: "0",
    backgroundColor: variables.color.primary
  }
}));
