import { useState } from 'react';
import { ZodError } from 'zod';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useAuthApi } from 'hooks/useAuthApi';
import { UpdateAccountType, UpdateAccountValidation } from './editAccount.validation';

type ErrorMessage = {
  email?: string;
  password?: string;
  pinCode?: string;
  contactPerson?: string;
  mobileNumber?: string;
};

type InEditType = {
  email: boolean;
  password: boolean;
  pinCode: boolean;
  contactPerson: boolean;
  mobileNumber: boolean;
};

enum EditableFields {
  email = 'email',
  password = 'password',
  pinCode = 'pinCode',
  contactPerson = 'contactPerson',
  mobileNumber = 'mobileNumber',
}

export const useEditAccountForm = () => {
  const { organisation, setOrganisation } = useAuth();
  const navigate = useNavigate();
  const { updateAccount } = useAuthApi();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ErrorMessage>({});
  const [formFields, setFormFields] = useState<UpdateAccountType>({
    email: organisation?.email || '',
    password: '',
    pinCode: '',
    contactPerson: organisation?.contactPerson || '',
    mobileNumber: organisation?.mobileNumber || '',
  });
  const [inEdit, setInEdit] = useState<InEditType>({
    email: false,
    password: false,
    pinCode: false,
    contactPerson: false,
    mobileNumber: false,
  });

  const setFieldValue = (name: string) => ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const toggleEditFieldValue = (name: EditableFields) => () => {
    if (inEdit[name]) {
      if (name === 'password' || name === 'pinCode') {
        setFormFields({
          ...formFields,
          [name]: '',
        });
      } else {
        setFormFields({
          ...formFields,
          [name]: organisation?.[name] || '',
        });
      }
    }
    setInEdit({
      ...inEdit,
      [name]: !inEdit[name],
    });
  };

  const submitForm = (name: EditableFields) => (e: React.SyntheticEvent) => {
    const reqObj = { [name]: formFields[name] };
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    if (!organisation) {
      navigate('/');
      return;
    }
    try {
      UpdateAccountValidation.shape[name].parse(formFields[name]);
    } catch (err: any) {
      if (err instanceof ZodError) {
        const zodErrors: Partial<Record<string, string>> = {};
        err.issues.forEach((issue) => {
          const fieldName = issue.path[0];
          const errorMessage = issue.message;
          if (!zodErrors[fieldName]) {
            zodErrors[name] = errorMessage;
          }
        });
        setErrors(zodErrors);
        setIsLoading(false);
      }
      return;
    }
    updateAccount(organisation?.id, reqObj).then(({ data }) => {
      setOrganisation(data);
    }).catch(() => setErrors({ email: 'Email är upptagen' })).finally(() => {
      setIsLoading(false);
      setInEdit({
        email: false,
        password: false,
        pinCode: false,
        contactPerson: false,
        mobileNumber: false,
      });
    });
  };

  return {
    setFieldValue,
    errors,
    isLoading,
    formFields,
    toggleEditFieldValue,
    inEdit,
    EditableFields,
    submitForm,
  };
};
