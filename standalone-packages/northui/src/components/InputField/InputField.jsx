import React from 'react';
import Form from '../Form';
import Input from '../Input';

const InputField = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  const showError = Boolean(touched[field.name] && errors[field.name]);
  return (
    <Form.Item
      showError={showError}
      errorMessage={errors[field.name]}
    >
      <Input
        feedback={touched[field.name] && errors[field.name] && 'error'}
        {...field}
        {...props}
      />
    </Form.Item>
  );
};

export default InputField;
