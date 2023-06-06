import { valoresGlobais } from "./atributos/globais";
import { validarValores } from "./comum";
import { Modificador, PragmasModificador } from "./superclasse";

export class AreaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
        "preenchimento-caixa": "padding-box",
        "borda-caixa": "border-box",
        "margem-caixa": "margin-box",
        "completar-caixa": "fill-box",
        "delimitar-caixa": "stroke-box",
        "visualizar-caixa": "view-box",
        "nao-recortar": "no-clip",
        "não-recortar": "no-clip",
        "borda": "border",
        "preenchimento": "padding",
        "modo-conteudo": "content",
        "modo-conteúdo": "content",
        "texto": "text",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["area-mascara", "área-máscara"], "mask-clip");

        // OBS.: Também aceita receber múltiplos valores, desde que sejam os listados.
        // Ex.: área-máscara: visualizar-caixa, completar-caixa, borda-caixa;

        // A lógica abaixo cobre somente o recebimento de UM dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos. 

        // if (!(valor in this.valoresAceitos) &&
        //     !(valor in valoresGlobais)) {
        //     throw new Error(`Propriedade 'área-máscara' com valor ${valor} inválido. Valores aceitos: 
        //     ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
        //     ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        // }

        validarValores("área-máscara", valor, this.valoresAceitos);


        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
