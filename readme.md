# Portfólio de Luiz Henrique Falcão

Este repositório contém o site de portfólio pessoal de Luiz Henrique Falcão (usuário **LHFalcao**), aluno de Introdução à Computação na CESAR School. O objetivo é apresentar, de forma simples, três páginas HTML que mostram informações sobre mim, minhas formações e meios de contato.

---

## Descrição

Este portfólio é composto por três páginas principais:

1. **Página Inicial (`index.html`)**  
   - Seção “Home”: saudação e breve introdução (“Hello, I’m Luiz Henrique…”).  
   - Botão para navegar até “About”.

2. **Página About (`about.html`)**  
   - Título “About Me” acompanhado da foto de perfil ao lado (usando `<table>` de forma simples).  
   - Textos de apresentação, experiências e citações de educação e certificações.

3. **Página Contact (`contact.html`)**  
   - Título “Contact” e informações de contato: telefone, e-mail (`lhfv@cesar.school`) e link para GitHub (`github.com/LHFalcao`).  
   - Texto adicional convidando a entrar em contato.

Além das três páginas, há:

- **Menu toggle em JavaScript**: um botão (“-”) que exibe ou oculta o menu de navegação.  
- **Estilos em CSS simples**: regra única para layout de desktop, sem media queries para mobile.  
- **Estrutura de pastas enxuta**: separação clara de HTML, CSS, JavaScript e assets.

---

## Estrutura do Repositório

meu-site/
│
├─ index.html # Página Home
├─ about.html # Página About Me
├─ contact.html # Página Contact
│
├─ css/
│ └─ style.css # Estilos globais (cores, fontes, layout, menu toggle)
│
├─ js/
│ └─ main.js # Script que controla exibição/ocultação do menu
│
└─ assets/
└─ img/
└─ foto-perfil.jpg # Foto de perfil (100×100px, círculo)

---

## Tecnologias Utilizadas

- **HTML5**  
  Uso de tags semânticas mínimas: `<header>`, `<section>`, `<footer>`, `<table>` (para posicionar foto ao lado do título em About), listas (`<ul>`, `<li>`) e cabeçalhos (`<h1>`, `<h2>`, `<h3>`).

- **CSS3**  
  - Layout de desktop sem frameworks, usando seletores simples.  
  - Estilização de fonte (Arial), cores (cinza e azul) e bordas.  
  - Nenhuma media query ou responsividade para mobile: tudo assume largura de desktop.

- **JavaScript (vanilla)**  
  - Toggle do menu: adiciona/remove a classe `show` em `.nav` ao clicar no botão `#toggle`.  
  - Controle básico de eventos DOM.

---

## Como Executar Localmente

1. Clone este repositório:  
git clone https://github.com/LHFalcao/portifolio-site.git

2. Navegue até a pasta das páginas:  
cd portifolio-site/meu-site

3. Abra qualquer página HTML no navegador:  
- `index.html` para a Home  
- `about.html` para About Me  
- `contact.html` para Contact  
Basta clicar duas vezes ou abrir com “Abrir com > Navegador”.

---

© 2025 Luiz Henrique Falcão.
