const tryLogin = (email, senha) => ({
  type: 'TRY_LOGIN',
  email,
  senha,
});

export default tryLogin;
