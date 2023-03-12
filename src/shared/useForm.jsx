import { useState } from 'react';
import PropTypes from 'prop-types';

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setState(prevState => {
      return { ...prevState, [name]: newValue };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({ ...initialState });
  };

  return { state, setState, handleChange, handleSubmit };
};

export default useForm;

useForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
};
