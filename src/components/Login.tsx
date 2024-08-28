import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/styles.css';

interface LoginValues {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: LoginValues) => {
    // Dummy authentication
    if (values.email === 'user@example.com' && values.password === '12345') {
      navigate('/dashboard');
    } else {
      toast.error('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values: LoginValues) => {
          const errors: Partial<LoginValues> = {};
          if (!values.email) errors.email = 'Required';
          if (!values.password) errors.password = 'Required';
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default Login;
