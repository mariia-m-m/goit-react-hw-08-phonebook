import RegistrationForm from 'components/Registration/RegistrationForm';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';
import { isUserLogin } from 'redux/auth/auth-selector';
import { Navigate } from 'react-router-dom';

const RegistrationPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return <RegistrationForm onSubmit={handleSignup} />;
};

export default RegistrationPage;
