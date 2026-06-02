import { Valor } from "../valores";
import { posicoes } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class JustificarConteudo extends Modificador {
    static nomeFolEs: string[] = ["justificar-conteudo", "justificar-conteúdo"];
    static nomeCss: string = "justify-content";
    static descricao: string = 'Define como o navegador distribui o espaço entre e ao redor dos itens ao longo do eixo principal de um contêiner flexível.';
    static documentacao: string = '# `justificar-conteudo`\nO alinhamento é feito após a aplicação dos comprimentos e margens automáticas, ou seja, se houver pelo menos um elemento flexível em um layout Flexbox com a propriedade `flex-crescimento` sendo diferente de 0, esta propriedade não terá efeito, pois não haverá espaço disponível.';
    static exemploCodigo: string = 'divisão {\n  justificar-conteudo: centro;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        seguro: "safe",
        inseguro: "unsafe",
        "espaco-entre": "space-between",
        "espaço-entre": "space-between",
        "espaco-ao-redor": "space-around",
        "espaço-ao-redor": "space-around",
        "espaco-uniforme": "space-evenly",
        "primeira-linha-base": "first baseline",
        "ultima-linha-base": "last baseline",
        "última-linha-base": "last baseline",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            JustificarConteudo.nomeFolEs,
            JustificarConteudo.nomeCss,
            pragmas,
        );

        // Além dos valores listados, aceita também todos os valores da Lista
        // de Posições - exceto 'top' e 'bottom' - 'superior' e 'inferior'
        const posicoesAceitas = Object.keys(posicoes).filter(
            (posicao) => posicao !== "superior" && posicao !== "inferior",
        );

        const posicoesValidas = {};
        posicoesAceitas.forEach((posicao, index) => {
            posicoesValidas[posicao] = posicoesAceitas[index];
        });

        if (!variavel) {
            validarValoresAdicionais(
                JustificarConteudo.nomeFolEs[1],
                valores,
                posicoesValidas,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
