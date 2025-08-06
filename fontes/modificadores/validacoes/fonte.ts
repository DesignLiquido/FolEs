import { Valor, ValorQualitativo, ValorTexto } from "../../valores";
import { MetodoCss } from "../../valores/metodos/css/metodo-css";
import { Metodo } from "../../valores/metodos/foles/metodo";
import { fontes } from "../atributos/fontes";
import { valoresGlobais } from "../atributos/globais";

export function validarValorFonte(
    nomePropriedade: string,
    valores: Valor[],
    valoresAceitos: { [valorFoles: string]: string },
) {
    let valorModificador: string;

    if (valores[0] instanceof ValorTexto) {
        valorModificador = valores[0].literalTexto;
        valorModificador = valorModificador.replace(/^["']|["']$/g, '');
    } if (valores[0] instanceof ValorQualitativo) {
        valorModificador = valores[0].qualitativo;
    } else if (valores[0] instanceof Metodo || valores[0] instanceof MetodoCss) {
        valorModificador = valores[0].constructor.name.toLowerCase();
    }
    
    if (
        !(valorModificador in fontes) &&
        !(valorModificador in valoresAceitos) &&
        !(valorModificador in valoresGlobais)
    ) {
        throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valorModificador} inválido. Valores aceitos:
            ${Object.keys(fontes).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.
        `);
    }
}
