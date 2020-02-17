import React from 'react'
import { makeStyles } from '@material-ui/core'
import variables from 'styles/variables'
interface IProps {
    title: string,
    icon: JSX.Element
}
export default (props: IProps) => {
    const classes = useStyles()
    return (
        <li className={classes.sideBarMenuItem}>
            <div>
                {props.icon}
            </div>
            <div>
                {props.title}
            </div>
        </li>
    )
}

const useStyles = makeStyles(theme => ({
    sideBarMenuItem: {
        display: 'flex',
        '& a': {
            diaplay: 'flex',
            flexDirection: 'row',
            padding: '84px',
            fontWeight: '200',
            fontSize: variables.fontSize.default,
            color: variables.color.primary,
            textDecoration: 'none',
            '& hover': {
                color: variables.color.primary,
                backgroundColor: '#ececee'
            },
            '& i': {
                width: variables.space['24'],
                height: variables.space['24'],
                flex: '0 0 auto',
                marginRight: variables.space['12']
            }
        }
    }
}))