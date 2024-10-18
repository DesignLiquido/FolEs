import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

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

        validarValorNumerico('configurações-variação-fonte', valor, this.valoresAceitos);
        this.valor = valor;

        // Não recebe quantificador
        proibirQuantificador('configurações-variação-fonte', quantificador);
    }
}
