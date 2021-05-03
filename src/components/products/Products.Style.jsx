import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
        background: 'rgb(246,246,246)',
    },
    title: {
        marginBottom: theme.spacing(0),
    },
    subTitle: {
        paddingTop: theme.spacing(1),
    },
    textField: {
    },
    divider: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(2),
    },
    pagination: {
        display: "flex",
        justifyContent: 'flex-end',
        '& > *': {
            marginTop: theme.spacing(2),
        }
    }

}))
