
import 'react-helmet-async';

declare module 'react-helmet-async' {
  import { ComponentClass, PropsWithChildren } from 'react';
  
  export interface HelmetProps {
    [key: string]: any;
  }
  
  export const Helmet: ComponentClass<HelmetProps>;
  
  export interface ProviderProps {
    context?: any;
  }
  
  export const HelmetProvider: ComponentClass<PropsWithChildren<ProviderProps>>;
}
