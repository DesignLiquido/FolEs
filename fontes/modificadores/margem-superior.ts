import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemSuperior extends Modificador {
    static nomeFolEs: string = "margem-superior";
    static nomeCss: string = "margin-top";
    static descricao: string = 'Define a estilização da margem superior de um elemento da aplicação.';
    static documentacao: string = '# `margem-superior`\nUm valor positivo o coloca mais longe de seus elementos vizinhos, enquanto um valor negativo o aproxima.';
    static exemploCodigo: string = 'p {\n  margem-superior: 5%;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(MargemSuperior.nomeFolEs, MargemSuperior.nomeCss, pragmas);
        
        if (!variavel) {
            validarValorNumerico(
                MargemSuperior.nomeFolEs,
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
