import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ImagemFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        url: "url",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("imagem-fundo", "background-image", pragmas);

        const valoresExtra: Array<string> = ['image-set', 'repeating-conic-gradient', 'repeating-radial-gradient', 'element'];

        if (!variavel) {
            validarValores(
                "imagem-fundo",
                valores,
                this.valoresAceitos,
                valoresExtra
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
