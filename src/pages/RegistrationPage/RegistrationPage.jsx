import RegistrationForm from 'components/Registration/RegistrationForm';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';
import { Navigate } from 'react-router-dom';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };
  return <RegistrationForm onSubmit={handleSignup} />;
};

export default RegistrationPage;
