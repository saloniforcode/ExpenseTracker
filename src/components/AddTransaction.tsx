import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

interface AddTransactionValues {
  amount: number;
  paymentMode: string;
  category: string;
  essential: boolean;
  remark: string;
}

const validationSchema = Yup.object({
  amount: Yup.number().required('Required'),
  paymentMode: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
  essential: Yup.boolean().required('Required'),
  remark: Yup.string().required('Required'),
});

const AddTransaction = () => {
  const handleSubmit = (values: AddTransactionValues) => {
    console.log(values);
    // Handle form submission
  };

  return (
    <div className="container">
      <h1>Add Transaction</h1>
      <Formik
        initialValues={{ amount: 0, paymentMode: '', category: '', essential: false, remark: '' }}
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
              <Field as="select" id="paymentMode" name="paymentMode">
                <option value="">Select</option>
                <option value="cash">Cash</option>
                <option value="phonepe">PhonePe</option>
                <option value="g-pay">G-Pay</option>
                <option value="credit card">Credit Card</option>
              </Field>
              <ErrorMessage name="paymentMode" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <Field as="select" id="category" name="category">
                <option value="">Select</option>
                <option value="food">Food</option>
                <option value="electronics">Electronics</option>
                <option value="beauty">Beauty</option>
                <option value="beauty">Other</option>

              </Field>
              <ErrorMessage name="category" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="essential">Essential</label>
              <Field type="checkbox" id="essential" name="essential" />
              <ErrorMessage name="essential" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="remark">Remark</label>
              <Field type="text" id="remark" name="remark" />
              <ErrorMessage name="remark" component="div" className="error" />
            </div>
            <button type="submit">Add Transaction</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddTransaction;
