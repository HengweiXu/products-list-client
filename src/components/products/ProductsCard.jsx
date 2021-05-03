import React from 'react'
import PropTypes from 'prop-types'
import { Card, Typography, Grid, Divider } from '@material-ui/core'
import { useStyles } from './ProductsCard.Style'

const ProductsCard = (props) => {
    const { product } = props
    const classes = useStyles()

    return (
        <Card className={classes.card} elevation={0}>
            <Grid item xs className={classes.image}>
                <img className={classes.productImage} src={product.product_image} alt={product.product_name} />
            </Grid>

            <Divider className={classes.divider} />

            <Grid container direction='row' justify='flex-start' spacing={1} className={classes.productsContainer}>
                <Grid item>
                    <Grid item xs>
                        <Typography gutterBottom variant='subtitle2'>
                            {product.product_name}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography gutterBottom variant='subtitle2'>
                            {product.description}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography gutterBottom variant='subtitle2' noWrap className={classes.price} >
                            {product.price}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}

ProductsCard.propTypes = {
    product: PropTypes.object,
    comparisons: PropTypes.array,
    handleChange: PropTypes.func,
    disableCheckbox: PropTypes.bool,
}

export default React.memo(ProductsCard)
