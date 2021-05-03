import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import Pagination from '@material-ui/lab/Pagination'
import { TextField } from '@material-ui/core'
import createMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Products } from './Products'
import ProductsCard from './ProductsCard'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-17-updated'
import ProductData from '../../productsData.json'

Enzyme.configure({ adapter: new Adapter() })

const mockProducts = (num) => {
    return ProductData.slice(0, num)
}

const initialStateWithProducts = (num) => {
    return {
        products: {
            products: mockProducts(num),
            total: num
        }
    }
}

const mockStore = (options) => {
    const middleware = [thunk]
    const mockStore = createMockStore(middleware)
    return mockStore(options.initialState)
}

describe('ProductsList', () => {
    let enzymeWrapper
    let initialState
    let store
    let historyMock

    beforeEach(() => {
        historyMock = { push: jest.fn() }
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    describe('Have 40 Products Data', () => {
        beforeEach(() => {
            initialState = initialStateWithProducts(40)
            store = mockStore({ initialState })
            enzymeWrapper = mount(<Provider store={store}>
                <Products history={historyMock} />
            </Provider>)
        })

        it('should render component successfully', () => {
            expect(enzymeWrapper.find('h3').text()).toBe('All Products')
            expect(enzymeWrapper.find(ProductsCard).exists()).toBe(true)
            expect(enzymeWrapper.find(Pagination).exists()).toBe(true)
        })

        it('should reset number of products per page when user change it', () => {
            const event = {
                target: {
                    value: '20'
                }
            }
            enzymeWrapper.find(TextField).prop('onChange')(event);
            expect(historyMock.push.mock.calls[0]).toEqual(['/products/1']);
        })
    })

    describe('No Products Data', () => {
        it('should not render products card', () => {
            initialState = initialStateWithProducts(0);
            store = mockStore({ initialState })
            enzymeWrapper = mount(<Provider store={store}>
                <Products history={historyMock} />
            </Provider>)

            expect(enzymeWrapper.find('h3').text()).toBe('All Products')
            expect(enzymeWrapper.find(ProductsCard).exists()).toBe(false)
            expect(enzymeWrapper.find(Pagination).exists()).toBe(true)
        })
    })
})
