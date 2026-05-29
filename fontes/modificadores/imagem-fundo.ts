import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ImagemFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        url: "url",
    };

    static nomeCss: string = "background-image";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("imagem-fundo", ImagemFundo.nomeCss, pragmas);

        const valoresExtra: Array<string> = [
            'conic-gradient',
            'cross-fade',
            'element',
            'image',
            'image-set',
            'paint',
            'radial-gradient',
            'repeating-conic-gradient',
            'repeating-linear-gradient',
            'repeating-radial-gradient',            
        ];

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
