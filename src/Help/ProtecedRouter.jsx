import React from 'react';
import { UserContext } from '../userContext';
import { Navigate } from 'react-router-dom';

const ProtecedRouter = ({ children }) => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return children;
  } else if (login === false) {
    return <Navigate to="/login" />;
  } else {
    return <></>;
  }
};

export default ProtecedRouter;
