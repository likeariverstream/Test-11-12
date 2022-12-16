import React, { ReactNode } from 'react';
export type TRequestOptions = {
  method?: string,
  headers: {
    'Content-Type': string
  },
  body?: string
}

export type TInputValues = {
  [key: string]: string | undefined
  user?: string | ''
  email?: string | ''
  password?: string | ''
  check?: string | ''
}

export type TUsersData = {
  id: number,
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export type TUsersInitialState = {
  isGetted: boolean
  page: null | number
  data: Array<TUsersData> | []
}

export type TUsersRegisterThunk = {
  email: string | undefined
  password: string | undefined
  name?: string | undefined
}

export type TRegisterInitialState = {
  id: null | number
  token: string
  isRegistred: boolean
}

export type TButton = {
  title: string
  isValid?: boolean
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export type TCard = {
  id: number
  firstName: string
  lastName: string
  avatar: string
}

export type TInput = {
  placeholder?: string,
  value?: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
  type: 'text' | 'email' | 'password' | 'url'
  minlength?: number
  maxlength?: number
  error?: string
  isValid?: boolean
  pattern?: string
}

export type TModalOverlay = {
  closeModal: () => void
}

export type TModal = {
  closeModal: () => void
  children: ReactNode
}

export type TChangeAvatar = {
  closeModal: () => void
}
