import { Valor, ValorAbreviacao, ValorNumerico, ValorQualitativo, ValorVirgula } from "../../valores";
import { validarValores } from "./comum";
import { validarValoresAdicionais } from "./condicao-extra";
import { validarValorCor } from "./cor";
import { validarValorFonte } from "./fonte";
import { validarIdentificacaoPersonalizada } from "./identificacao-personalizada";
import { validarMultiplosQualitativos } from "./multiplos-qualitativos";
import { validarValorNumerico } from "./numerica";

export function validarAtribuicaoAbreviada(
    tipoValidacao: string,
    nomePropriedade: string,
    valores: Valor[],
    valoresAceitos: { [valorFoles: string]: string } = null,
    valoresExtra: any = null,
    quantificadoresAceitos: { [valorFoles: string]: string } = null,
    naoAceitaQuantificador: boolean = false,
    validacaoPersonalizada: boolean = false,
): void {
    valores.forEach((valor) => {
        const arrayValores: Valor[] = [];
        arrayValores.push(valor);

        if (!(valor instanceof ValorAbreviacao || valor instanceof ValorVirgula)) {
            const valorTipado = valor as ValorQualitativo;
            if (validacaoPersonalizada) {
                if (
                    !(Object.keys(valoresAceitos).includes(valorTipado.qualitativo))
                    && !(valor instanceof ValorNumerico)
                ) {
                    validarIdentificacaoPersonalizada(nomePropriedade, valorTipado);
                    valoresAceitos[valorTipado.qualitativo] = valorTipado.qualitativo;
                }
            }

            switch (tipoValidacao) {
                case "comum":
                    validarValores(nomePropriedade, arrayValores, valoresAceitos, valoresExtra);
                    break;
                case "condição-extra":
                    validarValoresAdicionais(nomePropriedade, arrayValores, valoresExtra, valoresAceitos);
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
                    validarValorNumerico(nomePropriedade, arrayValores, valoresAceitos, valoresExtra, quantificadoresAceitos, naoAceitaQuantificador);
                    break;
                default:
                    break;
            }
        }
    });
}
