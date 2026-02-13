// Exercício 1.3: Configuração Dinâmica de Componentes de UI (Props)

// 1. Objeto props inicial
const props = {
    id: "btn-submit",
    className: "btn-primary",
    onClick: () => { console.log('Ação de envio!'); },
    "data-acao": "enviar",
    disabled: true,
    title: "Enviar formulário"
};

// 5. Configuração padrão
const configuracaoPadrao = { id: 'default-id', type: 'button', disabled: false };

// 2. Implementação da função
const prepararPropsBotao = (propriedades) => {
    // 3. e 4. Destructuring para extrair e Rest para agrupar atributos nativos
    const {
        id,
        className,
        onClick,
        ...atributosNativos // Restante das propriedades: title, data-acao, disabled: true
    } = propriedades;

    // 6. Spread Operator para criar propsFinais:
    // Padrão -> Atributos Nativos (Sobrescreve Padrão) -> Sobrescrita Final
    const propsFinais = {
        ...configuracaoPadrao,
        ...atributosNativos,
        disabled: false // Sobrescrita final para garantir o valor false
    };

    // Retorna o objeto completo para repasse ao elemento <button>
    return propsFinais;
};

// 7. Chamada e impressão do resultado
const propsFinais = prepararPropsBotao(props);
console.log('Props Finais Preparadas:', propsFinais);

// 8. Explicação
console.log("\nExplicação da Separação:");
console.log("O **Rest Operator** separou 'id', 'className' e 'onClick' (lógica interna) do restante ('atributosNativos', que são atributos HTML válidos).");
console.log("O **Spread Operator** garantiu a prioridade: o último item do spread (`disabled: false`) sobrescreveu o valor `disabled: true` que estava presente em `atributosNativos`, garantindo a configuração final desejada.");