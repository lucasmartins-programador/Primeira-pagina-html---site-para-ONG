# ♻️ Reaproveita Tech - Inclusão Digital Sustentável

O projeto **Reaproveita Tech** é um site institucional para uma organização fictícia que atua na redução do lixo eletrônico (e-lixo) e na promoção da inclusão digital em comunidades carentes.

O site é totalmente estático, construído com **HTML, CSS e JavaScript puros**, demonstrando um fluxo de navegação básico e um formulário de cadastro interativo.

## ✨ Funcionalidades Principais

* **Página Inicial (`index.html`):** Apresentação da missão e visão da organização.
* **Página de Projetos (`projetos.html`):** Detalhamento dos programas sociais (ex: Conecta Jovem, Tech Verde).
* **Página de Cadastro (`cadastro.html`):** Formulário completo para inscrição de **Voluntários** e **Doadores**.
* **Responsividade:** Layout adaptável para dispositivos móveis e desktops.
* **Formulário Interativo:**
    * Exibição condicional dos campos de doação (cartão) apenas quando a opção "Doador" é selecionada.
    * Máscaras de entrada (input masks) automáticas para Telefone, CPF e CEP, melhorando a experiência do usuário.

## 📁 Estrutura de Arquivos

O projeto é composto por 5 arquivos principais, organizados da seguinte forma:

* index.html - Página inicial 
* projetos.html -  Página sobre os projetos sociais 
* cadastro.html -  Página do formulário de cadastro/doação 
* style.css -  Folha de estilos (CSS) 
* script.js -  Lógica do menu e formulário (JavaScript)


## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **HTML5** | Estrutura semântica do conteúdo. |
| **CSS3** | Estilização (design, cores, layout responsivo com Grid e Flexbox). |
| **JavaScript (ES6)** | Comportamento dinâmico (menu mobile, máscaras, lógica de formulário). |

## 🚀 Como Executar o Projeto

Este é um projeto **estático** e não requer um servidor web para funcionar.

1.  **Clone o repositório** (se estiver em um Git) ou baixe os arquivos.
2.  **Abra o arquivo `index.html`** em seu navegador web preferido (Chrome, Firefox, Edge, etc.).

> **Dica:** Para um desenvolvimento local mais eficiente, utilize a extensão "Live Server" em editores de código como o VS Code.

## 📝 Detalhes do Código

### `script.js`

O arquivo JavaScript implementa as seguintes lógicas:

1.  **Toggle do Menu Mobile:** Gerencia o botão hamburguer para mostrar/esconder o menu principal em telas pequenas.
2.  **Exibição Condicional de Campos:** Monitora o campo `Tipo de Participação` (`id="tipo"`). Se o valor for `"doador"`, os campos de doação (`id="dadosDoacao"`) são exibidos e tornados obrigatórios.
3.  **Máscaras de Input:** Adiciona formatação automática para os seguintes campos:
    * **Telefone:** `(XX) XXXXX-XXXX`
    * **CPF:** `XXX.XXX.XXX-XX`
    * **CEP:** `XXXXX-XXX`
4.  **Simulação de Envio:** Após o envio do formulário, exibe um `alert()` simulando uma resposta de sucesso para o voluntário ou doador (com o valor da doação).

### `style.css`

O estilo é baseado em um layout responsivo (`@media (max-width: 700px)`) e utiliza:

* **Design Clean:** Foco no azul primário (`#1a73e8`) para transmitir confiança.
* **Flexbox e Grid:** Utilizados para o header e para os cards de projetos, garantindo alinhamento e responsividade.
