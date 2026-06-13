import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FlexDirecao extends Modificador {
    static nomeFolEs: string[] = ["flex-direcao", "flex-direção"];
    static nomeCss: string = "flex-direction";
    static descricao: string = 'Define a direção de um item com exibição do tipo flex.';
    static documentacao: string = '# `flex-direcao`\nEsta propriedade define como os items flexíveis são colocados no contêiner, definindo sua posição no eixo principal e também sua direção (normal ou reversa).';
    static exemploCodigo: string = 'divisao {\n  flex-direcao: inverter-linha;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        linha: "row",
        "inverter-linha": "row-reverse",
        coluna: "column",
        "inverter-coluna": "column-reverse",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(FlexDirecao.nomeFolEs, FlexDirecao.nomeCss, pragmas);

        if (!variavel) validarValores(FlexDirecao.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
