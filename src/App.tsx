import React from 'react';
import FAQ from './components/FAQ';
import './styles/styles.css';

const App: React.FC = () => {
  return (
    <div style={{ background: '#f3e8ff', minHeight: '100vh', padding: '4rem 1rem' }}>
      <FAQ />
    </div>
  );
};

export default App;
