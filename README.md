# 💸 Simulador de Saque-Aniversário FGTS

Este projeto é uma aplicação web que simula o valor do saque-aniversário do FGTS (Fundo de Garantia por Tempo de Serviço), conforme as regras estabelecidas pela Caixa Econômica Federal. Ele permite que o usuário insira seus dados e veja quanto poderá sacar no mês do seu aniversário.

---


## 🚀 Funcionalidades

- Formulário com os campos:
  - Nome
  - Telefone (com validação via API)
  - Saldo do FGTS
  - Mês de aniversário
- Cálculo automático do valor disponível para saque
- Exibição personalizada com nome e valor
- Layout responsivo e estilizado com TailwindCSS
- Validação de formulário com **Zod**
- Validação de número de telefone com **Phone Number Validation API**
- Navegação com **React Router**

---

## 📊 Regras de cálculo (Saque-Aniversário)

- **Até R$ 500** → 50% do saldo
- **R$ 500,01 a R$ 1.000** → 40% + R$ 50
- **R$ 1.000,01 a R$ 5.000** → 30% + R$ 150
- **R$ 5.000,01 a R$ 10.000** → 20% + R$ 650
- **R$ 10.000,01 a R$ 15.000** → 15% + R$ 1.150
- **R$ 15.000,01 a R$ 20.000** → 10% + R$ 1.900
- **Acima de R$ 20.000,01** → 5% + R$ 2.900

---

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [Phone Number Validation API](https://veriphone.io/) (via Fetch)

---

## ⚙️ Como rodar localmente

# 1. Clone o repositório
git clone 
cd simulador-fgts

# 2. Instale as dependências
npm install

# 3. Crie um arquivo .env com sua API KEY
VITE_PHONE_API_KEY=sua_chave_aqui

# 4. Rode o projeto
npm run dev

## 🧪 Testes

> Você pode configurar testes com:

- **Jest**
- **React Testing Library**

```bash
npm install --save-dev jest @testing-library/react
