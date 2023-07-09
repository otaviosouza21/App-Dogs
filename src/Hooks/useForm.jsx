import React from 'react';

const types = {
  email: {
    regex: /^[\w\\.-]+@[\w\\.-]+\.\w+$/,
    message: 'Preencha um email valido',
  },
  number:{
    regex: /^\d+$/,
    message: 'Utilize Numeros Apenas'
  }
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function onChange({ target }) {
    setValue(target.value);
    if (error) validate(target.value);
  }

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
