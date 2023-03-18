import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from '../Navbar/Navbar';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import AuthLayout from './AuthLayout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import UserRoutes from './UserRoutes';

const Phonebook = lazy(() => import('../pages/Phonebook/Phonebook'));
// const MainContacts = lazy(() => import('../pages/MainContacts/MainContacts'));
const NotFound = lazy(() => import('../pages/NotFound'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthLayout>
            <BrowserRouter basename="/goit-react-hw-08-phonebook">
              <Navbar />
              <UserRoutes />
            </BrowserRouter>
          </AuthLayout>
        </PersistGate>
      </Provider>
    </>
  );
};
