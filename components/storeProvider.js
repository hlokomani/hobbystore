'use client';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store/store';

export default function StoreProvider({ children }) {
  return (
    <BrowserRouter>
      <Provider store={store}>
          {children}
      </Provider>
    </BrowserRouter>
  );
}
