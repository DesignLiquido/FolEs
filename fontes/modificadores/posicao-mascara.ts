import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class PosicaoMascara extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(["posicao-mascara", "posição-máscara"], "mask-position", pragmas);

        if (!valorVariavel)
            validarValoresAdicionais("posição-máscara", valores, posicoesBasicas);

        this.valores = valores;
    }
}
