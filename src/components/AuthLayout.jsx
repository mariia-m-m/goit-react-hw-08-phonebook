import { current } from '../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthLayout;
