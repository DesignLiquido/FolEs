import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class PosicaoTextoSublinhado extends Modificador {
    static nomeFolEs: string[] = ["posicao-texto-sublinhado", "posição-texto-sublinhado"];
    static nomeCss: string = "text-underline-position";
    static descricao: string = 'Especifica a posição do texto sublinhado.';
    static documentacao: string = '# `posicao-texto-sublinhado`\nUm texto sublinhado na aplicação é definido ao atribuir o valor sublinhado à propriedade `decoração-texto`.';
    static exemploCodigo: string = 'p {\n  posicao-texto-sublinhado: de-frente;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        direita: "right",
        esquerda: "left",
        debaixo: "under",
        "de-frente": "from-front",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            PosicaoTextoSublinhado.nomeFolEs,
            PosicaoTextoSublinhado.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                PosicaoTextoSublinhado.nomeFolEs[1],
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
