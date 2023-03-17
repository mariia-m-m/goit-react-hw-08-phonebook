import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from '../Navbar/Navbar';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import AuthLayout from './AuthLayout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Phonebook = lazy(() => import('../pages/Phonebook/Phonebook'));
const MainContacts = lazy(() => import('../pages/MainContacts/MainContacts'));
const NotFound = lazy(() => import('../pages/NotFound'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthLayout>
            <BrowserRouter basename="/goit-react-hw-08-phonebook">
              <Navbar />
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route exact path="/" element={<Phonebook />} />
                  <Route element={<PrivateRoute />}>
                    <Route path="/main_contacts" element={<MainContacts />} />
                  </Route>
                  <Route element={<PublicRoute />}>
                    <Route
                      path="/registration"
                      element={<RegistrationPage />}
                    />
                    <Route path="/login" element={<LoginPage />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </AuthLayout>
        </PersistGate>
      </Provider>
    </>
  );
};
