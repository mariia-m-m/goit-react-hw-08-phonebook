import RegistrationForm from 'components/Registration/RegistrationForm';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };
  return <RegistrationForm onSubmit={handleSignup} />;
};

export default RegistrationPage;
