import React from "react";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { TInputValues } from "./types";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from "react-redux";
import { RootState } from "../store/store";

export const useDispatch = dispatchHook<ThunkDispatch<RootState, never, AnyAction>>;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export const useFormAndValidation = () => {
  const [values, setValues] = React.useState<TInputValues>({});
  const [errors, setErrors] = React.useState<TInputValues>({});
  const [isValid, setIsValid] = React.useState(false);

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

export const usePagination = (cardLimit: number, savedPage: number) => {
  const { data } = useSelector(store => store.users);
  const totalPages = Math.ceil(data.length / cardLimit)

  const [currentPage, setCurrentPage] = React.useState(savedPage);
  const handleChangePage = () => {
    currentPage < totalPages
      ? setCurrentPage(currentPage + 1)
      : setCurrentPage(1);

    currentPage < totalPages
      ? localStorage.setItem('page', JSON.stringify(currentPage + 1))
      : localStorage.setItem('page', JSON.stringify(1));
  }

  const firstIndex = currentPage * cardLimit - cardLimit;
  const lastIndex = currentPage * cardLimit;
  const array = data.slice(firstIndex, lastIndex);

  return {
    array, handleChangePage, firstIndex, lastIndex, totalPages
  }
}



