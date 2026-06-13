import { Valor } from "../valores";
import { ListaDeValorPercentual, unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class PosicaoDireita extends Modificador {
    static nomeFolEs: string[] = ["posicao-direita", "posição-direita"];
    static nomeCss: string = "right";
    static descricao: string = 'Define a posição direita de um elemento da aplicação.';
    static documentacao: string = '# `posicao-direita`\nPropriedade que participa da especificação da posição horizontal de um elemento posicionado. A propriedade não tem efeito em elementos não posicionados.';
    static exemploCodigo: string = 'p {\n  posicao-direita: 2.4em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(PosicaoDireita.nomeFolEs, PosicaoDireita.nomeCss, pragmas);

        const quantificadoresAceitos: { [nome: string]: string } = { ...unidadesMedida, ...ListaDeValorPercentual };

        if (!variavel) {
            validarValorNumerico(
                PosicaoDireita.nomeFolEs[1],
                valores,
                this.valoresAceitos,
                null,
                quantificadoresAceitos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
