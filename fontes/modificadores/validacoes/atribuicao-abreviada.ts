import { validarValores } from "./comum";
import { validarValoresAdicionais } from "./condicao-extra";
import { validarValorCor } from "./cor";
import { validarValorFonte } from "./fonte";
import { validarMultiplosQualitativos } from "./multiplos-qualitativos";
import { validarValorNumerico } from "./numerica";

export function validarAtribuicaoAbreviada(
    tipoValidacao: string,
    nomePropriedade: string,
    valor: any,
    valoresAceitos: { [valorFoles: string]: string } = undefined,
    valoresExtra: any = undefined,
): void {
    const separarValores: Array<string> = valor.split(" ");

    separarValores.forEach((valorIndividual: string) => {
        switch (tipoValidacao) {
            case "comum":
                validarValores(nomePropriedade, valorIndividual, valoresAceitos, valoresExtra);
                break;
            case "condicao-extra":
                validarValoresAdicionais(nomePropriedade, valorIndividual, valoresAceitos, valoresExtra);
                break;
            case "condição-extra":
                validarValoresAdicionais(nomePropriedade, valorIndividual, valoresAceitos, valoresExtra);
                break;
            case "cor":
                validarValorCor(nomePropriedade, valorIndividual, valoresAceitos, valoresExtra);
                break;
            case "fonte":
                validarValorFonte(nomePropriedade, valorIndividual, valoresAceitos, valoresExtra);
                break;
            case "multiplos-qualitativos":
                validarMultiplosQualitativos(nomePropriedade, valorIndividual, valoresAceitos ? valoresAceitos : undefined);
                break;
            case "múltiplos-qualitativos":
                validarMultiplosQualitativos(nomePropriedade, valorIndividual, valoresAceitos ? valoresAceitos : undefined);
                break;
            case "numerica":
                validarValorNumerico(nomePropriedade, valorIndividual, valoresAceitos, valoresExtra);
                break;
            case "numérica":
                validarValorNumerico(nomePropriedade, valorIndividual, valoresAceitos, valoresExtra);
                break;
            default:
                throw new Error(`A validação do tipo ${tipoValidacao} não foi encontrada`);
        }
    });
}
