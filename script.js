const login = () => {
  const loginButton = document.getElementById('login-button');
  loginButton.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === 'tryber@teste.com' && senha === '123456') {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Email ou senha inválidos.');
    }
  });
};

login();

const agreement = document.getElementById('agreement');

const enableSubmit = () => {
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.disabled = !agreement.checked;
};

const textAreaCounter = () => {
  const textArea = document.getElementById('textarea');
  const counter = document.getElementById('counter');
  counter.textContent = 500;
  textArea.addEventListener('keyup', () => {
    counter.textContent = 500 - textArea.value.length;
  });
};

textAreaCounter();

// ISSO TUDO AQUI EMBAIXO É O REQUISITO 21,
// const createFormData = () => {
//   const createData = document.createElement('form');
//   const nameInput = document.getElementById('input-name').value;
//   const lastName = document.getElementById('input-lastname').value;
//   const email = document.getElementById('email').value;

//   return `Nome: ${nameXD} ${lastName}, Email: ${email}`
// };

// const replaceForms = () => {
//   const submitBtn = document.getElementById('submit-btn');
//   const evaluationForm = document.getElementById('evaluation-form');
//   submitBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     evaluationForm.style.display = 'none';
//   });
// };

// replaceForms();

window.onload = () => {
  agreement.addEventListener('change', enableSubmit);
};
