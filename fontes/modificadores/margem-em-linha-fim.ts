import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemEmLinhaFim extends Modificador {
    static nomeFolEs: string = "margem-em-linha-fim";
    static nomeCss: string = "margin-inline-end";
    static descricao: string = 'Define a estilização do fim da margem em linha de um elemento.';
    static documentacao: string = '# `margem-em-linha-fim`\nEsta propriedade mapeia o valor recebeido para uma largura de borda física dependendo do modo de escrita do elemento, direcionalidade e orientação do texto.';
    static exemploCodigo: string = 'corpo {\n  margem-em-linha-fim: 10px;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(MargemEmLinhaFim.nomeFolEs, MargemEmLinhaFim.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                MargemEmLinhaFim.nomeFolEs,
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
