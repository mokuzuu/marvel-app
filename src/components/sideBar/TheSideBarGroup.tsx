import React from 'react'
import SideBarItem from './TheSideBarItem'
import { makeStyles } from '@material-ui/core'
import variables from 'styles/variables'
interface IProps {
    navs: {title: string, icon: JSX.Element}[]
}
export default (props:IProps) => {
    const classes = useStyles()
    return (
        <div className={classes.sideBarGroup}>
            <ul>
                {props.navs.map((nav, idx) => (
                    <SideBarItem title={nav.title} icon={nav.icon} key={idx}/>
                ))}
            </ul>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    sideBarGroup: {
        display: 'flex',
        justifyContent: 'center',
        '& ul': {
            padding: '0',
            color: 'white'
        },
        '& strong': {
            display: 'block',
            fontWeight: variables.fontWeight.regular,
            fontSize: variables.fontSize.default,
            borderBottom: variables.space['4'],
            marginBottom: variables.space['12']
        }
    }
}))
