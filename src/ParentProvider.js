import React from 'react';
import { useState } from 'react';

const ParentContext = React.createContext({
  parent: '',
  updateParent: () => {},
});

const ParentProvider = ({ children }) => {
  const [parent, setParent] = useState('');
  return (
    <ParentContext.Provider value={{ parent, setParent }}>
      {children}
    </ParentContext.Provider>
  );
};

export default ParentProvider;

export const useParent = () => React.useContext(ParentContext);
