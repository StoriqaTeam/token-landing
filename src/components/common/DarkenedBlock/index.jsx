import React from 'react';

import './styles.sass';

const DarkenedBlock = ({children}) => (
  <div className="darkened-block p-5">
    {children}
  </div>
);

export default DarkenedBlock;
