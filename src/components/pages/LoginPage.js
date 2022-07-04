import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import Input from '../atoms/Input';
import { BigHeader } from '../atoms/Header';

const initialValues = {
  email: '',
  password: '',
};

function LoginPage() {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(4).required(),
    }),
    onSubmit: (values) => {
      console.log(values);
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
        <button type="submit">Login</button>
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
  width: 50%;
`;

export default LoginPage;
