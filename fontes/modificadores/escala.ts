import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class Escala extends Modificador {
    static nomeFolEs: string = "escala";
    static nomeCss: string = "scale";
    static descricao: string = 'Permite especificar transformações de escala individualmente.';
    static documentacao: string = '# `escala`\nPropriedade que permite especificar transformações de escala independentemente da propriedade `transformar`. Isso mapeia melhor o uso típico da interface do usuário e evita a necessidade de lembrar a ordem exata das funções de transformação a serem especificadas no valor da propriedade `transformar`.';
    static exemploCodigo: string = 'imagem {\n  escala: 50%;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Escala.nomeFolEs, Escala.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                Escala.nomeFolEs,
                valores,
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
