import React from 'react';
import Layout from '@theme/Layout';
import Navbar from '@site/src/components/Navbar';

interface CustomLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  noFooter?: boolean;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({ 
  children, 
  title, 
  description, 
  noFooter = false 
}) => {
  return (
    <Layout title={title} description={description} noFooter={noFooter}>
      <Navbar />
      <div style={{ paddingTop: '70px' }}>
        {children}
      </div>
    </Layout>
  );
};

export default CustomLayout;
