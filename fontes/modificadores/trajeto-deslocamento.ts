import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TrajetoDeslocamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "margem-caixa": "margin-box",
        "caixa-batida": "stroke-box",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("trajeto-deslocamento", "offset-path");

        // OBS.: Também pode receber a função ray()
        // Ex.: offset-path: ray(45deg);

        // E funções do tipo <basic-shape>
        // Ex.: offset-path: circle(50% at 25% 25%);

        // TODO: Adaptar lógica

        const valoresExtra = ['url'];
        validarValores('trajeto-deslocamento', valor, this.valoresAceitos, valoresExtra);
        this.valor = valor;

        // Não recebe quantificador - mas as funções <basic-shape> recebem. Descomentar ao resolver TODO acima.
        // this.quantificador = quantificador;
    }
}
