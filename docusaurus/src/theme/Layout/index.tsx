import React from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type {WrapperProps} from '@docusaurus/types';
import Navbar from '@site/src/components/Navbar';
import { useBotColorScheme } from '@site/src/hooks/useBotColorScheme';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  useBotColorScheme();
  
  return (
    <>
      <Navbar />
      <Layout {...props} />
    </>
  );
}