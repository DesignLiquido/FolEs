import { Valor, ValorQualitativo, ValorTexto } from "../../valores";
import { MetodoCss } from "../../valores/metodos/css/metodo-css";
import { Metodo } from "../../valores/metodos/foles/metodo";

export function validarIdentificacaoPersonalizada(
    nomePropriedade: string,
    valores: Valor[],
): void {    
    let valorModificador: string;

    if (valores[0] instanceof ValorTexto) {
        valorModificador = valores[0].literalTexto;
        valorModificador = valorModificador.replace(/^["']|["']$/g, '');
    } if (valores[0] instanceof ValorQualitativo) {
        valorModificador = valores[0].qualitativo;
    } else if (valores[0] instanceof Metodo || valores[0] instanceof MetodoCss) {
        valorModificador = valores[0].constructor.name.toLowerCase();
    }

    // Regex para um identificador CSS válido
    const validarIdentificador: RegExp = /^-?[_a-zA-Z][-_a-zA-Z0-9]*$/;

    // // Listagem de valores globais (não permitidos)
    const valoresGlobais: Array<string> = [
        'herdar',
        'inicial',
        'reverter',
        'reverter-camada',
        'desarmar',
    ];

    // // Validações de um valor <custom-indent> válido
    const validacoesIdentificador = typeof valorModificador === "string"
        && validarIdentificador.test(valorModificador)
        && !(valoresGlobais.includes(valorModificador))
        && !(valorModificador.startsWith("--"));

    // // Retorna erro caso não passe nas validações acima
    if (!(validacoesIdentificador)) {
        throw new Error(`Modificador ou variável '${nomePropriedade}' com valor personalizado ${valorModificador} inválido. 
        O valor deve seguir as regras de sintaxe de uma identificação personalizada (<custom-indent>).`);
    }
}

/**
    Regras principais para um <custom-ident> válido:
    - Não pode ser um valor global (herdar, inicial, reverter)
    - Não pode começar com um dígito.
    - Não pode começar com --.
    - Pode conter letras, números, traços e sublinhados.
    - Pode começar com - ou _.
*/
