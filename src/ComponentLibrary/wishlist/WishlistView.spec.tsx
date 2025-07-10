import { fireEvent, render,screen } from '@testing-library/react'
import React from 'react'
import WishlistView from './WishlistView'
import { ProductType } from '../redux/slices/WishlistReducer'
import { Provider } from 'react-redux';
import  configureStore  from 'redux-mock-store';

const mockStore = configureStore([])
const sampleProduct: ProductType = {
  id: 101,
  title:"Apple AirPods Max Silver",
  price: 549.99,
  image: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp",
  rating: 3.47,
};

describe('WishlistView', () => {
    it('shows empty list message when there is nothing to displa', () => {
        const store = mockStore({
            wishlist: {
                items : []
            }
        })
        render(
            <Provider store={store}>
                <WishlistView />
       </Provider>
        )
        expect(screen.getByText("Nothing in Wishlist")).toBeInTheDocument()
    })
    
    
    it('when display wishlist items', () => {
        const store = mockStore({
            wishlist: {
                items : [sampleProduct]
            }
        })
        render(
            <Provider store={store}>
                <WishlistView />
            </Provider>
        )
        screen.debug(undefined,Infinity)
        expect(screen.getByText("Apple AirPods Max Silver")).toBeInTheDocument()
        expect(screen.getByText("₹ 549.99")).toBeInTheDocument();
        const stars = screen.getAllByRole("img", { hidden: true })
        expect(stars.length).toBeGreaterThanOrEqual(2)
    })
    it('when heart icon is clicked', () => {
        const store = mockStore({
            wishlist: {
                  items : [sampleProduct]
              }
        })
        render(
            <Provider store={store}>
                <WishlistView />
            </Provider>
        )

        const buttons = screen.getAllByRole('button')
        fireEvent.click(buttons[0])
        const actions = store.getActions()
        expect(actions).toContainEqual({
            type: "wishlist/removeFromWishlist",
            payload:101
        });
    })
    
    it('product adding to cart when button clicked', () => {
        const store = mockStore({
            wishlist: {
                items : [sampleProduct]
            }
        })
        render(
            <Provider store={store}>
                <WishlistView />
            </Provider>
        )

        fireEvent.click(screen.getByRole("button", { name: /Add to Cart/i }))
        const actions = store.getActions()
        expect(actions).toContainEqual({
          type: "cart/addToCart",
          payload: sampleProduct,
        });
        
    })

})