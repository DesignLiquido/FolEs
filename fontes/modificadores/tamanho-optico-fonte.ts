import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TamanhoOpticoFonte extends Modificador {
    static nomeFolEs: string[] = ["tamanho-optico-fonte", "tamanho-óptico-fonte"];
    static nomeCss: string = "font-optical-sizing";
    static descricao: string = 'Define se a renderização do texto é otimizada para exibição em tamanhos diferentes.';
    static documentacao: string = '# `tamanho-optico-fonte`\nQuando o dimensionamento óptico é usado, textos pequenos geralmente são renderizados com traços mais grossos e serifas maiores, enquanto textos maiores geralmente são renderizados de forma mais delicada, com mais contraste entre traços mais grossos e mais finos.';
    static exemploCodigo: string = 'p {\n  tamanho-optico-fonte: auto;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            TamanhoOpticoFonte.nomeFolEs,
            TamanhoOpticoFonte.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores(TamanhoOpticoFonte.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
