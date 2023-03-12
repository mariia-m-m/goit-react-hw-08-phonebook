import styles from '../Registration/registration.module.css';
import useForm from 'shared/useForm';
import TextField from 'shared/TextField/TextField';
import initialStateRegistration from './initialStateRegistration';
import fields from './fields';
import Button from '../../shared/Button/Button';

const RegistrationForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialStateRegistration,
    onSubmit,
  });

  const { name, email, password } = state;
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField
        value={name || ''}
        handleChange={handleChange}
        {...fields.name}
      />
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
      <Button>Register</Button>
    </form>
  );
};

export default RegistrationForm;
