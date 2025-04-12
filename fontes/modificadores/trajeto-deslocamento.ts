import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TrajetoDeslocamento extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        "margem-caixa": "margin-box",
        "caixa-batida": "stroke-box",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("trajeto-deslocamento", "offset-path", pragmas);

        const valoresExtra = ["url", "ray"];

        if (!valorVariavel)
            validarValores(
                "trajeto-deslocamento",
                valor,
                this.valoresAceitos,
                valoresExtra,
            );

        this.valor = valor;
    }
}
