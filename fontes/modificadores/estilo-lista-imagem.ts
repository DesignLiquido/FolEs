import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EstiloListaImagem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    static nomeCss: string = "list-style-image";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("estilo-lista-imagem", EstiloListaImagem.nomeCss, pragmas);

        const valoresExtra = ["cross-fade", "image", "image-set", "url"];

        if (!variavel) {
            validarValores(
                "estilo-lista-imagem",
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
