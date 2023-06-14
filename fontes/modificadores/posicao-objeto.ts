import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class PosicaoObjeto extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["posicao-objeto", "posição-objeto"], "object-position");

        // OBS.: Também pode receber DOIS números com quantificador como parâmetro
        // Ex.: posicao-objeto: 25% 75%;

        // TODO: Adaptar lógica para receber múltiplos valores
        validarValoresAdicionais('posição-objeto', valor, posicoesBasicas)

        this.valor = valor;

        // Quantificador fica inutilizado no momento
        // this.quantificador = quantificador;
    }
}
