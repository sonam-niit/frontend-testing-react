import { fireEvent, render, screen } from '@testing-library/react';
import Login from '../components/Login';

test('renders Login Form', () => {
  render(<Login />);
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
});

test('calls on Submit with email and password',()=>{
  const mockSubmit= jest.fn(); // ()=>{}
  render(<Login onSubmit={mockSubmit}/>)

  fireEvent.change(screen.getByLabelText(/email/i),{
    target: {value: 'test@gmail.com'}
  })
  fireEvent.change(screen.getByLabelText(/password/i),{
    target: {value: 'test@123'}
  })
  fireEvent.click(screen.getByRole('button',{name:/login/i}))
  expect(mockSubmit).toHaveBeenCalledWith({
    email:'test@gmail.com',
    password:'test@123'
  })
})
test('calls on Submit with email and password',()=>{
  const testMethod= jest.fn(); // ()=>{}
  render(<Login method={testMethod}/>)

  fireEvent.click(screen.getByRole('button',{name:/register/i}))
  expect(testMethod).toHaveBeenCalledWith(10)
})
//Validation Testing
test('display Error if fields are empty',()=>{
  render(<Login />)

  fireEvent.click(screen.getByRole('button',{name:/login/i}))
  expect(screen.getByText(/All Fileds are required!/i)).toBeInTheDocument();
})