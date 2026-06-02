import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ImpressaoAjusteCor extends Modificador {
    static nomeFolEs: string[] = ["impressao-ajuste-cor", "impressão-ajuste-cor"];
    static nomeCss: string = "print-color-adjust";
    static descricao: string = 'Define o que o agente do usuário pode fazer para otimizar a aparência do elemento no dispositivo de saída.';
    static documentacao: string = '# `impressao-ajuste-cor`\nPor padrão, o navegador pode fazer quaisquer ajustes na aparência do elemento que considere necessários, de acordo com o tipo e os recursos do dispositivo de saída.';
    static exemploCodigo: string = 'corpo {\n  impressao-ajuste-cor: economizar;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        economizar: "economy",
        exata: "exact",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ImpressaoAjusteCor.nomeFolEs,
            ImpressaoAjusteCor.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores(ImpressaoAjusteCor.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
