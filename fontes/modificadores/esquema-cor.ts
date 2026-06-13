import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EsquemaCor extends Modificador {
    static nomeFolEs: string = "esquema-cor";
    static nomeCss: string = "color-scheme";
    static descricao: string = 'Permite que um elemento indique em quais esquemas de cores ele pode ser renderizado.';
    static documentacao: string = '# `esquema-cor`\nEscolhas comuns para esquemas de cores do sistema operacional são claro e escuro ou modo diurno e modo noturno. Quando um usuário seleciona um desses esquemas de cores, o sistema operacional faz ajustes na interface do usuário.';
    static exemploCodigo: string = 'divisao {\n  esquema-cor: escuro;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        claro: "light",
        escuro: "dark",
        apenas: "only",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EsquemaCor.nomeFolEs, EsquemaCor.nomeCss, pragmas);

        if (!variavel) validarValores(EsquemaCor.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
