import { MetodoCss } from "../../valores/metodos/css/metodo-css";
import { Metodo } from "../../valores/metodos/foles/metodo";
import { validarValores } from "./comum";
import { validarValoresAdicionais } from "./condicao-extra";
import { validarValorCor } from "./cor";
import { validarValorFonte } from "./fonte";
import { validarIdentificacaoPersonalizada } from "./identificacao-personalizada";
import { validarMultiplosQualitativos } from "./multiplos-qualitativos";
import { validarValorNumerico } from "./numerica";
import { validarValorString } from "./string";

export function validarAtribuicaoAbreviada(
    tipoValidacao: string,
    nomePropriedade: string,
    valor: Metodo | MetodoCss | string,
    valoresAceitos: { [valorFoles: string]: string } = undefined,
    valoresExtra: any = undefined,
    validacaoString: boolean = false,
    validacaoPersonalizada: boolean = false,
): void {
    let separarValores: Array<string>;

    let metodoResolvido = "";
    if (valor instanceof Metodo) {
        metodoResolvido = valor.traducao;
    } else if (valor instanceof MetodoCss) {
        metodoResolvido = valor.traducao;
    } else {
        metodoResolvido = valor;
    }

    if (metodoResolvido.includes(",")) {
        separarValores = metodoResolvido.split(", ");
    } else if (metodoResolvido.includes("/")) {
        separarValores = metodoResolvido.split(" / ");
    } else if (metodoResolvido.includes(" ")) {
        separarValores = metodoResolvido.split(" ");
    }

    separarValores.forEach((valorIndividual: string) => {
        if (validacaoString) {
            const stringValida = validarValorString(valorIndividual);
            if (stringValida) valorIndividual = valorIndividual.replace(/^["']|["']$/g, '');
        }

        if (validacaoPersonalizada) {
            if (
                !(Object.keys(valoresAceitos).includes(valorIndividual))
                && typeof valorIndividual !== 'number'
                && !(Number(valorIndividual))
                && valorIndividual !== '0'
            ) {
                validarIdentificacaoPersonalizada(nomePropriedade, valorIndividual);
                valoresAceitos[valorIndividual] = valorIndividual;
            }
        }

        switch (tipoValidacao) {
            case "comum":
                validarValores(nomePropriedade, valorIndividual, valoresAceitos, valoresExtra);
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
            case "múltiplos-qualitativos":
                validarMultiplosQualitativos(nomePropriedade, valorIndividual, valoresAceitos ? valoresAceitos : undefined);
                break;
            case "numérica":
                validarValorNumerico(nomePropriedade, valorIndividual, valoresAceitos, valoresExtra);
                break;
        }
    });
}
