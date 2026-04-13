# --Lista de compras 🛒

Um gerenciador de lista de compras simples e intuitivo, focado em uma experiência de usuário limpa e funcional. O projeto permite adicionar, marcar como concluído e remover itens, contando com feedbacks visuais dinâmicos.

## 📸 Preview

![preview do projeto](./assets/Thumbnail.png)

## 🌟 Funcionalidades Principais
Adição Dinâmica: Permite inserir novos itens na lista através de um campo de texto. O sistema utiliza a técnica de clonagem de um item "modelo" escondido no HTML.

Marcação de Itens (Check/Uncheck): Ao clicar no ícone do item, ele alterna visualmente entre o estado padrão e o selecionado, simulando a conclusão da compra.

Feedback de Remoção: Ao deletar um item, um alerta personalizado de "Item removido" aparece na parte inferior da tela, desaparecendo automaticamente após 3 segundos ou ao ser fechado manualmente.

Interatividade Visual: Efeitos de hover e estados de clique personalizados via CSS e JavaScript para garantir uma interface viva.

Layout Responsivo: Otimizado tanto para dispositivos móveis quanto para desktop, utilizando Flexbox, CSS Grid e Media Queries.

## 🛠️ Tecnologias e Conceitos Aplicados
HTML5 & CSS3:

Uso de CSS Nesting (aninhamento) para maior organização dos estilos.

CSS Variables para centralização de cores e tipografia.

Animações de opacidade e escala para suavizar a interface.

JavaScript (Lógica de Interface):

cloneNode(true): Para replicar a estrutura complexa do item da lista de forma eficiente.

Delegação de Eventos: Um único EventListener no elemento pai (ul) gerencia os cliques em todos os botões e imagens dos itens filhos.

setTimeout: Gerenciamento do tempo de exibição das mensagens de alerta.

closest(): Navegação precisa na árvore do DOM para encontrar elementos específicos a partir de um clique.

## ▶️ Como executar

```bash
# Clone o repositório
git clone https://github.com/JouberthAlves/Projeto-lista-de-compra.git

# Entre na pasta
cd Projeto-lista-de-compra

# Abra o index.html

# Execute com o live server

## 👤 Autor

- Jouberth Alves Macedo