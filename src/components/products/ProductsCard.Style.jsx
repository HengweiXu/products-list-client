import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    card: {
        position: 'relative',
        margin: theme.spacing(1),
        padding: theme.spacing(2),
        maxWidth: theme.spacing(32),
        width: '100%',
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
    },
    productImage: {
        height: theme.spacing(20),
        margin: theme.spacing(1) / 2,
    },
    divider: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    productsContainer: {
        paddingLeft: theme.spacing(1),
    },
    price: {
        fontWeight: 'bold',
    },
}))
