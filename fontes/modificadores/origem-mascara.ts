import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class OrigemMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
        "preenchimento-caixa": "padding-box",
        "borda-caixa": "border-box",
        "margem-caixa": "margin-box",
        "completar-caixa": "fill-box",
        "delimitar-caixa": "stroke-box",
        "visualizar-caixa": "view-box",
        "preenchimento": "padding",
        "borda": "border",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["origem-mascara", "origem-máscara"], "mask-origin");

        // OBS.: Também aceita receber múltiplos valores. 
        // A lógica abaixo cobre somente o recebimento de UM dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos. 

        validarValores('origem-máscara', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
