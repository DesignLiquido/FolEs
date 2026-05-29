import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ImagemMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
    };

    static nomeCss: string = "mask-image";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["imagem-mascara", "imagem-máscara"], ImagemMascara.nomeCss, pragmas);

        const valoresExtra = ["image", "linear-gradient", "url"];

        if (!variavel) {
            validarValores(
                "imagem-máscara",
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
