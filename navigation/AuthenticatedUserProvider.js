import React, { useState, createContext } from 'react';

export const AuthenticatedUserContext = createContext({});

export const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

// export default () => {w
//   const AuthenticatedUserContext = createContext({});

//   const AuthenticatedUserProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     return (
//       <AuthenticatedUserContext.Provider value={{ user, setUser }}>
//         {children}
//       </AuthenticatedUserContext.Provider>
//     );
//   };

//   //return an object with two keys
//   return AuthenticatedUserContext, AuthenticatedUserProvider;
// };
