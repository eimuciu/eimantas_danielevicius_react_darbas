import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { BigHeader } from '../atoms/Header';

const initialValues = {
  email: '',
  password: '',
};

const validation = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(4).required(),
});

function LoginPage() {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
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
          value={formik.values.email}
          name="email"
          type="text"
          placeholder="Your email"
          error={formik.errors.email}
        />

        <Input
          onChange={formik.handleChange}
          value={formik.values.password}
          name="password"
          type="password"
          placeholder="Your password"
          error={formik.errors.password}
        />
        <Button type="submit">Login</Button>
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
