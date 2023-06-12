
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store'
import Login from '../login'
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
const storeRender = () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  )
}


describe("Request Services Component Tests", function () {

  test('rendered', () => {
    storeRender();
    const linkElement = screen.getByTestId("login-header");
    expect(linkElement).toBeTruthy();
  })
  test('rendered', () => {
    storeRender();
    const linkElement = screen.getByTestId("login-mail");
    expect(linkElement).toBeTruthy();
  })
  test('rendered', () => {
    storeRender();
    const linkElement = screen.getByTitle("login-mailID");
    expect(linkElement).toBeTruthy();
  })
  test('rendered', () => {
    storeRender();
    const linkElement = screen.getByTitle("login-password");
    expect(linkElement).toBeTruthy();
  })
  test('rendered', () => {
    storeRender();
    const linkElement = screen.getByTitle("login-passcode");
    expect(linkElement).toBeTruthy();
  })
  test('rendered', () => {
    storeRender();
    const linkElement = screen.getByTestId("login-btn1");
    expect(linkElement).toBeTruthy();
  })
  

});

describe("Component Tests", function () {
  test('rendered', () => {
    storeRender();
    fireEvent.change(screen.getByTitle('login-mailID'), { target: { value: 'SOMETHING' } });
    expect(screen.getByTitle('login-mailID').value).toBe('SOMETHING');
  })

  test('rendered', () => {
    storeRender();
    fireEvent.change(screen.getByTitle('login-passcode'), { target: { value: 'SOMETHING' } });
    expect(screen.getByTitle('login-passcode').value).toBe('SOMETHING');
  })

  test('calls onClick prop when clicked', () => {
    storeRender();
    fireEvent.click(screen.getByTestId("login-btn"));
    expect(screen.getByTestId("login-btn")).toBeTruthy();
  })
})

