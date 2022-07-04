import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { BigHeader } from '../atoms/Header';
import { sendLogin } from '../../api';
import { useLoading } from '../../hooks';
import { useAuthCtx } from '../../store/AuthProvider';
import { useNavigate } from 'react-router-dom';

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
});

function LoginPage() {
  const [isLoading, setIsLoading] = useLoading();
  const { login } = useAuthCtx();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: async (values) => {
      setIsLoading(true);
      const logindetails = await sendLogin(values);
      if (logindetails.err) {
        alert(logindetails.err);
        setIsLoading(false);
        return;
      }
      login(logindetails.token);
      setIsLoading(false);
      navigate('/', { replace: true });
    },
  });

  return (
    <MainContainer>
      <BigHeader text={'Login'} />
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
        <Button type="submit">{isLoading ? 'Loading...' : 'Login'}</Button>
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
`;

export default LoginPage;
