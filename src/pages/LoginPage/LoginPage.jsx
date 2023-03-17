import { useSelector, useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { isUserLogin } from 'redux/auth/auth-selector';
import { Navigate } from 'react-router-dom';
import LoginForm from 'components/Login/LoginForm';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="goit-react-hw-08-phonebook" />;
  }
  return <LoginForm onSubmit={handleLogin} />;
};

export default LoginPage;
