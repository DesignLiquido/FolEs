import { Valor } from "../../valores";
import { valoresGlobais } from "../atributos/globais";
import { capturarValor } from "./capturar-valor";

export function validarValores(
    nomePropriedade: string,
    valores: Valor[],
    valoresAceitos: { [valorFoles: string]: string },
    valoresExtra?: string[],
) {
    const valorModificador: { valor: string | number, metodo: boolean, numerico: boolean } = capturarValor(valores);
    
    if (valoresExtra === null) {
        if (!(valorModificador.valor in valoresAceitos) && !(valorModificador.valor in valoresGlobais)) {
            throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valorModificador.valor} inválido. Valores aceitos: 
            ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
        }
    } else {
        let metodoValido = false;
        if (valorModificador.metodo) {
            for (let index = 0; index < valoresExtra.length; index++) {
                metodoValido = valorModificador.valor === valoresExtra[index];
                if (metodoValido) break;
            }
        }

        if (
            !(valorModificador.valor in valoresAceitos) &&
            !metodoValido &&
            !(valorModificador.valor in valoresGlobais)
        ) {
            throw new Error(`Modificador ou variável '${nomePropriedade}' com valor ${valorModificador.valor} inválido. Valores aceitos: 
            ${Object.keys(valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
            ${valoresExtra.reduce((final, atual) => (final += `, ${atual}`))},
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
        }
    }
}
