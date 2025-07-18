import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class PosicaoObjeto extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(["posicao-objeto", "posição-objeto"], "object-position", pragmas);

        if (!valorVariavel)
            validarValoresAdicionais("posição-objeto", valores, posicoesBasicas);

        this.valores = valores;
    }
}
