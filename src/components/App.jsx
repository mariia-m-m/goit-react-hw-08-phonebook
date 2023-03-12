import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from '../Navbar/Navbar';
import { Provider } from 'react-redux';
import store from '../redux/store';
const Phonebook = lazy(() => import('../pages/Phonebook/Phonebook'));
const MainContacts = lazy(() => import('../pages/MainContacts/MainContacts'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Registration = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path="/" element={<Phonebook />} />
              <Route path="/main_contacts" element={<MainContacts />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </>
  );
};
