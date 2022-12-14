import React from "react";

type TValues = {
  [key: string]: string | undefined
  user?: string | ''
  email?: string | ''
  password?: string | ''
  check?: string | ''
}

export function useFormAndValidation() {
  const [values, setValues] = React.useState<TValues>({});
  const [errors, setErrors] = React.useState<TValues>({});
  const [isValid, setIsValid] = React.useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    
    setIsValid((e.target.closest('form') as HTMLFormElement).checkValidity());
  };



  const resetForm = React.useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}
