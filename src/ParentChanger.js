import React, { useState } from 'react';
import { useParent } from './ParentProvider';

const ParentChagner = () => {
  const [newParent, setNewParent] = useState('');
  const { parent, setParent } = useParent();

  return (
    <div>
      <div>
        Greeting from your Parent : <h3>{parent}</h3>
      </div>
      <input
        type="text"
        value={newParent}
        placeholder="New Parent"
        onChange={(e) => setNewParent(e.target.value)}
      />
      <br />
      <button onClick={() => setParent(newParent)}>Change your Parent!</button>
    </div>
  );
};

export default ParentChagner;
