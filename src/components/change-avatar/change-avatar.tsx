import React, {FormEventHandler, FC} from 'react';
import styles from './change-avatar.module.css';
import MediaQuery from 'react-responsive';
import { useDispatch, useSelector } from '../../utils/hooks';
import { useParams } from 'react-router';
import { useFormAndValidation } from '../../utils/hooks';
import { changeAvatar } from "../../store/reducers/users";
import { Input } from '../input/input';
import { Button } from '../button/button';
import { TChangeAvatar } from '../../utils/types';

export const ChangeAvatar: FC<TChangeAvatar> = ({closeModal}) => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>()
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();
  const { url } = values;
  const { data } = useSelector(store => store.users);
  const prevUser = data.find(i => i.id === Number(id));

  const handleSubmit: FormEventHandler<HTMLFormElement> = React.useCallback((e) => {
    e.preventDefault();
    const user = { ...prevUser, avatar: url };
    dispatch(changeAvatar(user))
    closeModal()
    resetForm();
  }, [url, dispatch, resetForm, prevUser, closeModal])
  return (
    <>
    <MediaQuery minWidth={500}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.container}>
            <h3 className={styles.heading}>Изменить аватар</h3>
            <Input isValid name="url" type="url"
              value={values.url || ''} error={errors.url} placeholder={`Ссылка на картинку`} onChange={handleChange} />
            <Button type='submit' isValid={isValid} title="Cохранить" />
          </div>
        </form>
    </MediaQuery>
    <MediaQuery maxWidth={500}>
        <form className={styles.mobileForm} onSubmit={handleSubmit}>
          <div className={styles.mobileContainer}>
            <h3 className={styles.heading}>Изменить аватар</h3>
            <Input isValid name="url" type="url"
              value={values.url || ''} error={errors.url} placeholder={`Ссылка на картинку`} onChange={handleChange} />
            <Button type='submit' isValid={isValid} title="Cохранить" />
          </div>
        </form>
    </MediaQuery>
  </>

  )
}
