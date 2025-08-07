import { Valor } from "../../valores";
import { fontes } from "../atributos/fontes";
import { valoresGlobais } from "../atributos/globais";
import { capturarValor } from "./capturar-valor";

export function validarValorFonte(
    nomePropriedade: string,
    valores: Valor[],
    valoresAceitos: { [valorFoles: string]: string },
) {
    const valorModificador: { valor: string | number, metodo: boolean, numerico: boolean } = capturarValor(valores);
    
    if (
        !(valorModificador.valor in fontes) &&
        !(valorModificador.valor in valoresAceitos) &&
        !(valorModificador.valor in valoresGlobais)
    ) {
        throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valorModificador.valor} inválido. Valores aceitos:
            ${Object.keys(fontes).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.
        `);
    }
}
