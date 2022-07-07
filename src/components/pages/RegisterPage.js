import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { BigHeader } from '../atoms/Header';
import { sendRegister } from '../../api';
import { useLoading } from '../../hooks';

const initialValues = {
  email: '',
  password: '',
};

const validation = Yup.object({
  email: Yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(4, 'Password must be at least 4 characters')
    .required('Password is required'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

function RegisterPage({ makeMessage }) {
  const [isLoading, setIsLoading] = useLoading();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: async (values, actions) => {
      setIsLoading(true);
      delete values.passwordConfirmation;
      const registerdetails = await sendRegister(values);
      if (!registerdetails.success) {
        makeMessage(registerdetails.msg, 'error');
        setIsLoading(false);
        return;
      }
      makeMessage(registerdetails.msg, 'success');
      setIsLoading(false);
      actions.resetForm();
    },
  });

  return (
    <MainContainer>
      <BigHeader text={'Register'} />
      <Form onSubmit={formik.handleSubmit}>
        <Input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          name="email"
          type="text"
          placeholder="Your email"
          error={formik.touched.email && formik.errors.email}
        />
        <Input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          name="password"
          type="password"
          placeholder="Your password"
          error={formik.touched.password && formik.errors.password}
        />
        <Input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.passwordConfirmation}
          name="passwordConfirmation"
          type="password"
          placeholder="Repeat password"
          error={
            formik.touched.passwordConfirmation &&
            formik.errors.passwordConfirmation
          }
        />
        <Button type="submit">{isLoading ? 'Waiting...' : 'Register'}</Button>
      </Form>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 40%;
  @media (max-width: 1024px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default RegisterPage;
