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

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("ajustar-tamanho-fonte", "font-size-adjust", pragmas);

        // OBS.: Os valores aceitos listados só são válidos quando há DOIS valores atribuídos.
        // Ex.: ajustar-tamanho-fonte: altura-cap 0.5;

        // TODO: Avaliar pq valores numéricos declarados via variável não estão sendo aceitos
        if (!valorVariavel) {
            validarValorNumerico('ajustar-tamanho-fonte', valor, this.valoresAceitos);
        }
        
        this.valor = valor;
        
        // Não recebe quantificador, apenas o valor numérico.
        if (quantificador) proibirQuantificador('ajustar-tamanho-fonte', quantificador);
    }
}
