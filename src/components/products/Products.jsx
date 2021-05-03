import React, { useEffect, useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Divider, Grid } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'

import { useStyles } from './Products.Style'
import ProductsCount, { DEFAULT_COUNT } from './ProductsCount'
import ProductsCard from './ProductsCard'
import { getProducts } from './actions'

const ProductsList = props => {
    const classes = useStyles()
    const { products, total, actions, history } = props
    const url = new URL(window.location.href)
    const path = url.pathname.split('/')
    const index = path[1] && path[1] === "products" ? (parseInt(path[2]) || 1) : 1;

    const [page, setPage] = useState(index)
    const [count, setCount] = useState(DEFAULT_COUNT)
    const [pageNum, setPageNum] = useState(total > 0 ? Math.ceil(total / count) : 0)

    useEffect(() => {
        actions.getProducts(page, count)
        if (total > 0) {
            setPageNum(Math.ceil(total / count))
        }
    }, [page, count, total, actions, pageNum])

    const handlePageClick = (e, page) => {
        setPage(page)
        history.push(`/products/${page}`)
    }

    const handleCountChange = (value) => {
        setPage(1)
        setCount(parseInt(value))
        setPageNum(Math.ceil(total / value))
        history.push(`/products/1`)
    }

    return (
        <div className={classes.root}>
            <ProductsCount total={total} count={count} handleChange={handleCountChange} />
            <Divider className={classes.divider} />
            <Grid container spacing={1} justify='space-evenly'>
                {products.map((product, i) => (
                    <ProductsCard key={i} product={product} />
                ))
                }
            </Grid>
            <div className={classes.pagination}>
                <Pagination
                    count={pageNum || 1}
                    page={page} shape="rounded"
                    defaultPage={page || 1}
                    boundaryCount={2}
                    onChange={handlePageClick} />
            </div>
        </div>
    )
}

ProductsList.propTypes = {
    history: PropTypes.object.isRequired,
    products: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
    return { ...state.products }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({ getProducts }, dispatch),
    }
}

export const Products = React.memo(connect(mapStateToProps, mapDispatchToProps)(ProductsList))
