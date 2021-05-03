import React from 'react'
import { useStyles } from './Products.Style'

import PropTypes from 'prop-types'
import { TextField, Grid, Typography } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'

export const DEFAULT_COUNT = 8

const countOptions = [
    { id: 8, value: '8 per page' },
    { id: 20, value: '20 per page' },
    { id: 50, value: '50 per page' },
    { id: 100, value: '100 per page' },
]

const ProductsCount = props => {
    const { total, count, handleChange } = props
    const classes = useStyles()

    return (
        <div className={classes.content}>
            <h3 className={classes.title}>All Products</h3>
            <Grid container spacing={1} justify='space-between'>
                <Typography className={classes.subTitle} variant='subtitle2' noWrap>
                    {total} products
                </Typography>

                <TextField
                    required
                    select
                    id='page'
                    value={count}
                    onChange={e => handleChange(e.target.value)}
                    className={classes.textField}
                    inputProps={{}}
                    margin='dense'
                    variant='standard'
                >
                    {countOptions.map(opt => (
                        <MenuItem key={opt.id} value={opt.id} className={classes.textField}>
                            {opt.value}
                        </MenuItem>
                    ))}
                </TextField>

            </Grid>
        </div>
    )
}

ProductsCount.propTypes = {
    total: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default React.memo(ProductsCount)
