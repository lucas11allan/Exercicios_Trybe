const addClient = (nome, email, idade) => ({
  type: 'ADD_CLIENT',
  nome,
  email,
  idade,
});

export default addClient;
