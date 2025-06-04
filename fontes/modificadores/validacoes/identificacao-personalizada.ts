export function validarIdentificacaoPersonalizada(
    nomePropriedade: string,
    valor: any,
): void {
    // Regex para um identificador CSS válido
    const validarIdentificador: RegExp = /^-?[_a-zA-Z][-_a-zA-Z0-9]*$/;
    
    // Listagem de valores globais (não permitidos)
    const valoresGlobais: Array<string> = [
        'herdar',
        'inicial',
        'reverter',
        'reverter-camada',
        'desarmar',
    ];

    // Validações de um valor <custom-indent> válido
    const validacoesIdentificador = typeof valor === "string"
        && validarIdentificador.test(valor)
        && !(valoresGlobais.includes(valor))
        && !(valor.startsWith("--"));
    
    // Retorna erro caso não passe nas validações acima
    if (!(validacoesIdentificador)) {
        throw new Error(`Propriedade '${nomePropriedade}' com valor personalizado ${valor} inválido. 
        O valor deve seguir as regras de sintaxe de uma identificação personalizada (<custom-indent>).`);
    }
}

// const a = validarIdentificacaoPersonalizada('ao-mudar', 'opacidade');
// console.log(a);

/**
    Regras principais para um <custom-ident> válido:
    - Não pode ser um valor global (herdar, inicial, reverter)
    - Não pode começar com um dígito.
    - Não pode começar com --.
    - Pode conter letras, números, traços e sublinhados.
    - Pode começar com - ou _.
*/
