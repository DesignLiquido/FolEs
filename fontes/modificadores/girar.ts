import { Valor } from "../valores";
import { angulos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class Girar extends Modificador {
    static nomeFolEs: string = "girar";
    static nomeCss: string = "rotate";
    static descricao: string = 'Permite especificar transformações de rotação de um elemento da aplicação.';
    static documentacao: string = '# `girar`\nEsta propriedade define as transformações de rotação individualmente e independente da propriedade `transformar`. Isso mapeia melhor o uso típico da interface do usuário e evita a necessidade de lembrar a ordem exata das funções de transformação a serem especificadas na propriedade transformar.';
    static exemploCodigo: string = 'imagem {\n  girar: 90deg;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Girar.nomeFolEs, Girar.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                Girar.nomeFolEs,
                valores,
                this.valoresAceitos,
                null,
                angulos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
