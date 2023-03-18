import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import LoginForm from 'components/Login/LoginForm';
import { isUserLogin } from 'redux/auth/auth-selector';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return <LoginForm onSubmit={handleLogin} />;
};

export default LoginPage;
