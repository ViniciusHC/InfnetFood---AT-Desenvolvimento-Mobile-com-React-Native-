import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState({
    nome: 'Teste da Teste Silva',
    email: 'teste@teste',
    cpf: '999999999'
  });
  const [senha, setSenha] = useState('teste');
  const [loginDigitado, setLoginDigitado] = useState('');
  const [senhaDigitada, setSenhaDigitada] = useState('');
  const [logged, setLogged] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        login,
        setLogin,
        loginDigitado,
        setLoginDigitado,
        senha,
        setSenha,
        senhaDigitada,
        setSenhaDigitada,
        logged,
        setLogged,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;