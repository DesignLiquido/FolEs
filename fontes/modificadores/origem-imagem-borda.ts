import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class OrigemImagemBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
    };

    static nomeCss: string = "border-image-source";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("origem-imagem-borda", OrigemImagemBorda.nomeCss, pragmas);

        const valoresExtra = ["cross-fade", "image", "image-set", "linear-gradient", "url"];

        if (!variavel) {
            validarValores(
                "origem-imagem-borda",
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
