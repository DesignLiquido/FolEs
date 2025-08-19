import { Valor, ValorNumerico, ValorQualitativo } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";
import { validarValorNumerico } from "./validacoes/numerica";

export class PosicaoDeslocamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["posicao-deslocamento", "posição-deslocamento"],
            "offset-position",
            pragmas,
        );

        // No caso de múltiplos valores, pode receber tanto as posições básicas quanto número-quantificador
        if (valores.length > 1) {
            valores.forEach((valor) => {
                const arrayValores: Valor[] = [];
                arrayValores.push(valor);

                if (valor instanceof ValorQualitativo) {
                    validarValoresAdicionais(
                        "posição-deslocamento",
                        arrayValores,
                        posicoesBasicas,
                        this.valoresAceitos,
                    );
                } else if (valor instanceof ValorNumerico) {
                    const valoresExtra: Array<string> = [];
                    Object.keys(posicoesBasicas).forEach((posicao) => valoresExtra.push(posicao));

                    validarValorNumerico(
                        "posição-deslocamento",
                        arrayValores,
                        this.valoresAceitos,
                        valoresExtra,
                        unidadesMedida
                    )
                }
            });
        } else {
            validarValoresAdicionais(
                "posição-deslocamento",
                valores,
                posicoesBasicas,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
    }
}
