import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class AjustarTamanhoFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "altura-ex": "ex-height",
        "altura-cap": "cap-height",
        "largura-ch": "ch-width",
        "largura-ic": "ic-width",
        "altura-ic": "ic-height",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("ajustar-tamanho-fonte", "font-size-adjust", pragmas);

        // OBS.: Os valores aceitos listados só são válidos quando há DOIS valores atribuídos.
        // Ex.: ajustar-tamanho-fonte: altura-cap 0.5;
        // TODO: Implementar lógica restante no futuro, tendo em vista a estrutura do Av.Sintático.

        validarValorNumerico('ajustar-tamanho-fonte', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador, apenas o valor numérico.
        proibirQuantificador('ajustar-tamanho-fonte', quantificador);
    }
}
