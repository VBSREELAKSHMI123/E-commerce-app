'use client'; 

import { ReactNode } from 'react';
import ReduxProvider from "../ComponentLibrary/wrapper/ReduxProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return <ReduxProvider>{children}</ReduxProvider>;
}
