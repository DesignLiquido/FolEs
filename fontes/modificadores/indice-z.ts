import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class IndiceZ extends Modificador {
    static nomeFolEs: string[] = ["indice-z", "índice-z"];
    static nomeCss: string = "z-index";
    static descricao: string = 'Define a ordem de aparição um elemento quando esse sobrepõe seus descendentes ou outros elementos flexíveis.';
    static documentacao: string = '# `indice-z`\nElementos com um índice-z maior cobrem aqueles com um índice-z menor.';
    static exemploCodigo: string = 'divisao {\n  indice-z: 0;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(IndiceZ.nomeFolEs, IndiceZ.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                IndiceZ.nomeFolEs[1],
                valores,
                this.valoresAceitos,
                null,
                null,
                true
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
