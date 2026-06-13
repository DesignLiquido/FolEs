import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Hifens extends Modificador {
    static nomeFolEs: string[] = ["hifens", "hífens"];
    static nomeCss: string = "hyphens";
    static descricao: string = 'Especifica como as palavras devem receber o hífen quando o texto é quebrado em várias linhas.';
    static documentacao: string = '# `hifens`\nO uso desta propriedade pode impedir totalmente a hifenização, inserir hífens em pontos especificados manualmente no texto ou permitir que o navegador insira hífens automaticamente.';
    static exemploCodigo: string = 'p {\n  hifens: manual;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        manual: "manual",
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Hifens.nomeFolEs, Hifens.nomeCss, pragmas);

        if (!variavel) validarValores(Hifens.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
