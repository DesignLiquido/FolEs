import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemDireita extends Modificador {
    static nomeFolEs: string = "margem-direita";
    static nomeCss: string = "margin-right";
    static descricao: string = 'Define a estilização da margem direita de um elemento da aplicação.';
    static documentacao: string = '# `margem-direita`\nUm valor positivo o coloca mais longe de seus elementos vizinhos, enquanto um valor negativo o aproxima.';
    static exemploCodigo: string = 'p {\n  margem-direita: 5%;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(MargemDireita.nomeFolEs, MargemDireita.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                MargemDireita.nomeFolEs,
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
