import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class ConfiguracoesVariacaoFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["configuracoes-variacao-fonte", "configurações-variação-fonte"],
            "font-variation-settings", 
            pragmas
        );
        
        // OBS.: Pode receber um caso especial de string + número
        // EX.:  configurações-variação-fonte: "XHGT" 0.7;
        
        // A validação abaixo cobre somente valores aceitos e numéricos
        // TODO: Adaptar lógica para cobrir caso especial
        validarValorNumerico('configurações-variação-fonte', valor, this.valoresAceitos);
        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
