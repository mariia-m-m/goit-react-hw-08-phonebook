import TextField from 'shared/TextField/TextField';
import Button from '../../shared/Button/Button';
import useForm from 'shared/useForm';
import fields from './fields';
import initialStateLogin from './initialStateLogin';
import styles from '../Registration/registration.module.css';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialStateLogin,
    onSubmit,
  });

  const { email, password } = state;
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField
        value={email || ''}
        handleChange={handleChange}
        {...fields.email}
      />
      <TextField
        value={password || ''}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
