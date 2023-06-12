
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store'
import { Header } from './header';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
const storeRender = () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    )
}
describe("Header Tests", function () {
    test('AllElements', () => {
        storeRender();
        const linkElement = screen.getByTestId("headerAll");
        expect(linkElement).toBeTruthy();
        screen.debug(linkElement)
    })

    test('headingText', () => {
        storeRender();
        const linkElement = screen.getByTestId("heading");
        expect(linkElement).toBeTruthy();
    })
    test('logout_exist', () => {
        storeRender();
        const linkElement = screen.getByTestId("logout");
        expect(linkElement).toBeTruthy();
    })
    test('addProduct_exist', () => {
        storeRender();
        const linkElement = screen.getByTestId("add_product");
        expect(linkElement).toBeTruthy();
    })


    test('formHead', () => {
        storeRender();
        fireEvent.click(screen.getByTestId("add_product"));
        const linkElement = screen.getByTestId('headDetails');
        expect(linkElement).toBeTruthy();
    })
    test('addProductbtn', () => {
        storeRender();
        fireEvent.click(screen.getByTestId("add_product"));
        expect(screen.getByTestId("add_product")).toBeTruthy();
    })
    test('formProductName', () => {
        storeRender();
        fireEvent.click(screen.getByTestId("add_product"));
        const linkElement = screen.getByTestId("productName");
        const productId = screen.getByTestId('productId')
        expect(linkElement).toBeTruthy();
        expect(productId).toBeTruthy()
    })
    test('formProductId', () => {
        storeRender();
        fireEvent.click(screen.getByTestId("add_product"));
        const productId = screen.getByTestId('productId')
        expect(productId).toBeTruthy()
    })
    test('formProductSize', () => {
        storeRender();
        fireEvent.click(screen.getByTestId("add_product"));
        const productId = screen.getByTestId('productSize')
        expect(productId).toBeTruthy()
    })
    test('formProductQuantity', () => {
        storeRender();
        fireEvent.click(screen.getByTestId("add_product"));
        const productId = screen.getByTestId('productQuantity')
        expect(productId).toBeTruthy()
    })
    test('formProductPrice', () => {
        storeRender();
        fireEvent.click(screen.getByTestId("add_product"));
        const productId = screen.getByTestId('productPrice')
        expect(productId).toBeTruthy()
    })
    test('formProductImage', () => {
        storeRender();
        fireEvent.click(screen.getByTestId("add_product"));
        const productId = screen.getByTestId('productImage')
        expect(productId).toBeTruthy()
    })
    test('formSubmit', () => {
        storeRender();
        fireEvent.click(screen.getByTestId("add_product"));
        const productId = screen.getByTestId('formSubmit')
        expect(productId).toBeTruthy()
    })
    test('formClose', () => {
        storeRender();
        fireEvent.click(screen.getByTestId("add_product"));
        const productId = screen.getByTestId('formClose')
        expect(productId).toBeTruthy()
    })
    test('logout', () => {
        storeRender();
        fireEvent.click(screen.getByTestId("logout"));
        expect(screen.getByTestId("logout")).toBeTruthy();
    })

})




