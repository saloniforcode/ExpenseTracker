import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface Transaction {
  id: number;
  amount: number;
  date: string;
  paymentMode: string;
  category: string;
  essential: boolean;
  remark: string;
}

interface EditTransactionProps {
  transaction: Transaction;
}

const validationSchema = Yup.object({
  amount: Yup.number().required('Required'),
  date: Yup.date().required('Required'),
  paymentMode: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
  remark: Yup.string().required('Required'),
});

const EditTransaction: React.FC<EditTransactionProps> = ({ transaction }) => {
  const handleSubmit = (values: Transaction) => {
    console.log(values);
    // Handle form submission
  };

  return (
    <div className="container">
      <h1>Edit Transaction</h1>
      <Formik
        initialValues={transaction}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="amount">Amount</label>
              <Field type="number" id="amount" name="amount" />
              <ErrorMessage name="amount" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <Field type="date" id="date" name="date" />
              <ErrorMessage name="date" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="paymentMode">Payment Mode</label>
              <Field type="text" id="paymentMode" name="paymentMode" />
              <ErrorMessage name="paymentMode" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <Field type="text" id="category" name="category" />
              <ErrorMessage name="category" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="remark">Remark</label>
              <Field type="text" id="remark" name="remark" />
              <ErrorMessage name="remark" component="div" className="error" />
            </div>
            <button type="submit">Update Transaction</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditTransaction;
