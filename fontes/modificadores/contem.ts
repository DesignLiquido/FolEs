import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Contem extends Modificador {
    static nomeFolEs: string[] = ["contem", "contém"];
    static nomeCss: string = "contain";
    static descricao: string = 'Indica que um elemento e seu conteúdo são independentes do resto da árvore do documento.';
    static documentacao: string = '# `contem`\n A contenção permite isolar uma subseção do DOM, fornecendo benefícios de desempenho e limitando os cálculos de layout, estilo, pintura, tamanho ou qualquer combinação a uma subárvore DOM, em vez da página inteira. A contenção também pode ser usada para definir o escopo de propriedades com contadores e citações CSS.';
    static exemploCodigo: string = 'envelope-texto {\n  contem: estrito;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        estrito: "strict",
        "modo-conteudo": "content",
        "modo-conteúdo": "content",
        tamanho: "size",
        "tamanho-alinhado": "inline-size",
        layout: "layout",
        estilo: "style",
        pintar: "paint",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Contem.nomeFolEs, Contem.nomeCss, pragmas);

        if (!variavel) validarValores(Contem.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
