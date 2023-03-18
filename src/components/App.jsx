import { BrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import Navbar from '../Navbar/Navbar';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import AuthLayout from './AuthLayout';
import UserRoutes from './UserRoutes';

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
