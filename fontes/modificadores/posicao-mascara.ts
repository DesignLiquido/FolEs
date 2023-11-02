import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class PosicaoMascara extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["posicao-mascara", "posição-máscara"], "mask-position", pragmas);

        // OBS.: Também pode receber DOIS números com quantificador como parâmetro
        // Ex.: posicao-mascara: 25% 75%;

        // Porém, essa validação inicial cobre somente as posições e os valores globais
        validarValoresAdicionais('posição-máscara', valor, posicoesBasicas);

        this.valor = valor;

        // Quantificador fica inutilizado no momento
        // this.quantificador = quantificador;
    }
}
