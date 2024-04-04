import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TrajetoDeslocamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "margem-caixa": "margin-box",
        "caixa-batida": "stroke-box",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("trajeto-deslocamento", "offset-path", pragmas);

        const valoresExtra = ['url', 'ray'];
        validarValores('trajeto-deslocamento', valor, this.valoresAceitos, valoresExtra);
        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
