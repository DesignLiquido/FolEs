import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EstiloListaImagem extends Modificador {
    static nomeFolEs: string = "estilo-lista-imagem";
    static nomeCss: string = "list-style-image";
    static descricao: string = 'Define uma imagem a ser usada como marcador de item da lista.';
    static documentacao: string = '# `estilo-lista-imagem`\nEsta propriedade também pode ser especificada utilizando a propriedade de atribuição abreviada `estilo-lista`.';
    static exemploCodigo: string = 'lista-numerada {\n  estilo-lista-imagem: url("starsolid.gif");\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EstiloListaImagem.nomeFolEs, EstiloListaImagem.nomeCss, pragmas);

        const valoresExtra = ["cross-fade", "image", "image-set", "url"];

        if (!variavel) {
            validarValores(
                EstiloListaImagem.nomeFolEs,
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
