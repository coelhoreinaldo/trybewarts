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

const getContent = () => {
  const contents = document.querySelectorAll('input[name="input-content"]:checked');
  let teste = '';
  console.log(contents);
  for (let i = 0; i < contents.length; i += 1) {
    teste += ` ${contents[i].value},`;
  }
  return teste;
};

const createFormData = () => {
  const nameInput = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const name = `Nome: ${nameInput} ${lastName}`;
  const email = `Email: ${document.getElementById('input-email').value}`;
  const house = `Casa: ${document.getElementById('house').value}`;
  const family = `Família: ${document.querySelector('input[name="family"]:checked').value}`;
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const avaliacao = `Avaliação: ${rate}`;
  const obs = `Observações: ${document.getElementById('textarea').value}`;
  const createData = document.createElement('form');
  createData.id = 'form-data';
  const main = document.querySelector('main');
  const materias = `Matérias: ${getContent()}`;
  main.appendChild(createData);
  createData.innerHTML = `${name},${email},${house},${family},${avaliacao},${obs}, ${materias}`;
};

const replaceForms = () => {
  const submitBtn = document.getElementById('submit-btn');
  const evaluationForm = document.getElementById('evaluation-form');
  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    evaluationForm.style.display = 'none';
    createFormData();
  });
};

replaceForms();

window.onload = () => {
  agreement.addEventListener('change', enableSubmit);
};
