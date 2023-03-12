import styles from './textfield.module.css';
import { useMemo } from 'react';
import { nanoid } from 'nanoid';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <>
      <label htmlFor={id}>{label} </label>
      <input
        id={id}
        onChange={handleChange}
        {...props}
        className={styles.input}
      />
    </>
  );
};

export default TextField;
