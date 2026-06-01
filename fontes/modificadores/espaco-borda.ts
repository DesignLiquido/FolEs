import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspacoBorda extends Modificador {
    static nomeFolEs: string[] = ["espaco-borda", "espaço-borda"];
    static nomeCss: string = "border-spacing";
    static descricao: string = 'Define a distância entre as bordas das células adjacentes em uma tabela. ';
    static documentacao: string = '# `espaço-borda`\nEsta propriedade se aplica somente quando a propriedade `recolher-borda` possui o valor `separar`.';
    static exemploCodigo: string = 'tabela {\n  espaço-borda: 10vh;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            EspacoBorda.nomeFolEs,
            EspacoBorda.nomeCss,
            pragmas
        );

        if (!variavel) {
            validarValorNumerico(
                EspacoBorda.nomeFolEs[1],
                valores,
                null,
                null,
                comprimentos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
