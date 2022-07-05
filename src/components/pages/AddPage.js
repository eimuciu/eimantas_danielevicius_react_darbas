import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import { BigHeader } from '../atoms/Header';
import Button from '../atoms/Button';
import { useLoading } from '../../hooks';
import { postDataToServer } from '../../api';

const initialValues = {
  title: '',
  description: '',
};

const validation = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
});

function AddPage({ makeMessage }) {
  const [isLoading, setIsLoading] = useLoading();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: async (values, actions) => {
      setIsLoading(true);
      const datadetails = await postDataToServer(values);
      if (datadetails.err) {
        makeMessage(datadetails.err, 'error');
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
      makeMessage(datadetails.msg, 'success');
      actions.resetForm();
    },
  });

  return (
    <MainContainer>
      <BigHeader text={'Create skill'} />
      <Form onSubmit={formik.handleSubmit}>
        <Input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          name="title"
          type="text"
          placeholder="Title"
          error={formik.touched.title && formik.errors.title}
        />

        <TextArea
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          name="description"
          type="text"
          placeholder="Description"
          error={formik.touched.description && formik.errors.description}
        />
        <Button type="submit">{isLoading ? 'Waiting...' : 'Create'}</Button>
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

export default AddPage;
