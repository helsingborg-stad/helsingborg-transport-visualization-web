import { Button, Input } from 'components';
import { useLoginForm } from '../../hooks';

export const LoginForm = () => {
  const {
    submitForm, formFields, setFieldValue, errors, isLoading,
  } = useLoginForm();

  return (
    <form onSubmit={submitForm}>
      <div>
        <Input
          type="email"
          placeholder="Enter email"
          name="email"
          id="email"
          value={formFields.email}
          onChange={setFieldValue('email')}
          error={errors.email}
        />
      </div>
      <div>
        <Input
          type="password"
          placeholder="Enter Password"
          name="password"
          id="password"
          value={formFields.password}
          onChange={setFieldValue('password')}
          error={errors.password}
        />
      </div>
      <Button type="submit" disabled={isLoading}>Login</Button>
    </form>
  );
};
