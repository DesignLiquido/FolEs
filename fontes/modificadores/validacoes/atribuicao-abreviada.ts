import { Valor, ValorAbreviacao, ValorVirgula } from "../../valores";
import { validarValores } from "./comum";
import { validarValoresAdicionais } from "./condicao-extra";
import { validarValorCor } from "./cor";
import { validarValorFonte } from "./fonte";
import { validarMultiplosQualitativos } from "./multiplos-qualitativos";
import { validarValorNumerico } from "./numerica";
// import { validarValorString } from "./string";
// import { validarIdentificacaoPersonalizada } from "./identificacao-personalizada";

export function validarAtribuicaoAbreviada(
    tipoValidacao: string,
    nomePropriedade: string,
    valores: Valor[],
    valoresAceitos: { [valorFoles: string]: string } = null,
    valoresExtra: any = null,
    quantificadoresAceitos: { [valorFoles: string]: string } = null,
    // validacaoString: boolean = false,
    // validacaoPersonalizada: boolean = false,
): void {
    valores.forEach((valor) => {
        const arrayValores: Valor[] = [];
        arrayValores.push(valor);

        if (!(valor instanceof ValorAbreviacao || valor instanceof ValorVirgula)) {
            switch (tipoValidacao) {
                case "comum":
                    validarValores(nomePropriedade, arrayValores, valoresAceitos, valoresExtra);
                    break;
                case "condição-extra":
                    validarValoresAdicionais(nomePropriedade, arrayValores, valoresAceitos, valoresExtra);
                    break;
                case "cor":
                    validarValorCor(nomePropriedade, arrayValores, valoresAceitos);
                    break;
                case "fonte":
                    validarValorFonte(nomePropriedade, arrayValores, valoresAceitos);
                    break;
                case "múltiplos-qualitativos":
                    validarMultiplosQualitativos(nomePropriedade, arrayValores, valoresAceitos, quantificadoresAceitos);
                    break;
                case "numérica":
                    validarValorNumerico(nomePropriedade, arrayValores, valoresAceitos, valoresExtra, quantificadoresAceitos);
                    break;
                default:
                    break;
            }
        }
    });
}
