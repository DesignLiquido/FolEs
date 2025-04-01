import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class PosicaoMascara extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(["posicao-mascara", "posição-máscara"], "mask-position", pragmas);

        if (!valorVariavel) validarValoresAdicionais('posição-máscara', valor, posicoesBasicas);

        this.valor = valor;
    }
}
