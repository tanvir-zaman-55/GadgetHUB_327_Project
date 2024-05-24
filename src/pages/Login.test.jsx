import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Login } from './login';
import '@testing-library/jest-dom/extend-expect'; 


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));


jest.mock('./users.json', () => ({
  customers: [
    { email: 'customer@example.com', password: 'pass1234' },
  ],
  sellers: [
    { email: 'seller@example.com', password: 'pass1234' },
  ],
}));

describe('Login Component', () => {
  const mockedNavigate = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    require('react-router-dom').useNavigate.mockImplementation(() => mockedNavigate);
  });

  test('renders login form', () => {
    render(<Login />, { wrapper: MemoryRouter });

    expect(screen.getByLabelText(/i am a/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('displays error message with invalid credentials', () => {
    render(<Login />, { wrapper: MemoryRouter });

    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'invalid@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrongpassword' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(screen.getByText(/invalid email or password/i)).toBeInTheDocument();
  });

  test('navigates to profile with valid customer credentials', () => {
    render(<Login />, { wrapper: MemoryRouter });

    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'customer@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'pass1234' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(mockedNavigate).toHaveBeenCalledWith('/profile');
    expect(sessionStorage.getItem('user')).toEqual(JSON.stringify({
      email: 'customer@example.com',
      password: 'pass1234',
      userType: 'customer',
    }));
  });

  test('navigates to profile with valid seller credentials', () => {
    render(<Login />, { wrapper: MemoryRouter });

    fireEvent.change(screen.getByLabelText(/i am a/i), { target: { value: 'seller' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'seller@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'pass1234' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(mockedNavigate).toHaveBeenCalledWith('/profile');
    expect(sessionStorage.getItem('user')).toEqual(JSON.stringify({
      email: 'seller@example.com',
      password: 'pass1234',
      userType: 'seller',
    }));
  });
});
