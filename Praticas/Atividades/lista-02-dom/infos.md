Requisitos Gerais para Todas as Questões:

● Evitar Recarregamento da Página: As interações do usuário, como o envio de formulários, devem ser processadas via JavaScript, impedindo o recarregamento completo da página. Utilize event.preventDefault() para controlar o comportamento padrão dos eventos.
● Manipulação do DOM: As atualizações na interface do usuário (exibição de resultados, mensagens de erro) devem ser feitas dinamicamente através da manipulação do Document Object Model (DOM) com JavaScript.
● Eventos: Utilize os eventos apropriados (ex: submit para formulários, click para botões, change para campos de entrada) para capturar as ações do usuário e disparar a lógica necessária.
● Validação de Entrada: Implemente validações básicas para os dados de entrada, garantindo que o usuário forneça informações no formato esperado antes do processamento.
● Feedback Visual: Forneça feedback visual claro ao usuário para mensagens de erro e saídas bem-sucedidas da aplicação. Por exemplo, use cores (vermelho para erro, verde para sucesso), ícones (X para erro, ✔ para sucesso) ou áreas de texto dedicadas para exibir essas informações de forma proeminente na interface do usuário.
● Estrutura do Código: Organize seu código JavaScript de forma legível e modular, utilizando funções para separar responsabilidades.
● Boas Práticas: Siga boas práticas de desenvolvimento web, como a semântica do HTML e a separação de responsabilidades (HTML para estrutura, CSS para estilo, JavaScript para comportamento).