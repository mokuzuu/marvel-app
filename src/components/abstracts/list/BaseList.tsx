import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { truncate } from "utils/truncate";
import variables from "styles/variables";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    overflow: "scroll",
    padding: 0,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up("xs")]: {
      height:
        (
          document.documentElement.clientHeight -
          parseInt(variables.footer.height, 10) -
          parseInt(variables.header.height, 10)
        ).toString() + "px"
    },
    [theme.breakpoints.up("sm")]: {
      height:
        (
          document.documentElement.clientHeight -
          parseInt(variables.header.height, 10)
        ).toString() + "px"
    },
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  inline: {
    display: "inline"
  },
  progressWrapper: {
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

interface IProps {
  items: any[];
  onItemClick?: Function;
  fetch: Function;
}
export default (props: IProps) => {
  const [count, setCount] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [isListLoading, setListLoadingStatus] = React.useState(false);
  const classes = useStyles();
  const listRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    setListLoadingStatus(true);
    props.fetch(count).then((res: any) => {
      const { data } = res;
      setCount(data.count);
      if (total !== data.total) {
        setTotal(data.total);
      }
      setListLoadingStatus(false);
    });
  }, []);

  React.useEffect(() => {
    if (listRef.current) {
      listRef.current.addEventListener("scroll", () => {
        if (listRef.current) {
          if (!isListLoading) {
            if (
              listRef.current.scrollTop + listRef.current.clientHeight + 10 >=
              listRef.current.scrollHeight
            ) {
              setListLoadingStatus(true);
            }
          }
        }
      });
    }
  }, [listRef]);

  React.useEffect(() => {
    if (isListLoading && count <= total) {
      props.fetch(count).then((res: any) => {
        const { data } = res;
        setCount(prev => {
          return prev + data.count;
        });
        if (total !== data.total) {
          setTotal(data.total);
        }
        setListLoadingStatus(false);
      });
    }
  }, [isListLoading]);
  return (
    <List className={classes.root} ref={listRef}>
      {props.items.map((item, key) => (
        <Link
          to={item.to}
          key={key}
          onClick={() => props.onItemClick && props.onItemClick(item.id)}
        >
          <ListItem alignItems="flex-start" button>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={item.thumbnail} />
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={truncate(item.description, 30)}
            />
          </ListItem>
        </Link>
      ))}
      {isListLoading && (
        <div className={classes.progressWrapper}>
          <CircularProgress />
        </div>
      )}
    </List>
  );
};
