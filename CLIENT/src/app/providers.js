'use client';

import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '@/store/store';
import useAuth from '@/hooks/useAuth';

function AuthInitializer({ children }) {
  const { refreshSession } = useAuth();

  useEffect(() => {
    refreshSession();
  }, []);

  return children;
}

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <AuthInitializer>
        {children}
      </AuthInitializer>
    </Provider>
  );
}
