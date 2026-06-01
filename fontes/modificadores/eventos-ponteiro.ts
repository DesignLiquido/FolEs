import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EventosPonteiro extends Modificador {
    static nomeFolEs: string = "eventos-ponteiro";
    static nomeCss: string = "pointer-events";
    static descricao: string = 'Define os eventos de ponteiro de um elemento.';
    static documentacao: string = '# `eventos-ponteiro`\nEsta propriedade especifica sob quais circunstâncias (se houver) um determinado elemento gráfico pode se tornar o alvo dos eventos de ponteiro.';
    static exemploCodigo: string = 'divisao {\n  eventos-ponteiro: auto;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        nenhum: "none",
        pinturaVisivel: "visiblePainted",
        pinturaVisível: "visiblePainted",
        preenchimentoVisivel: "visibleFill",
        preenchimentoVisível: "visibleFill",
        tracoVisivel: "visibleStroke",
        traçoVisível: "visibleStroke",
        pintado: "painted",
        preencher: "fill",
        tracado: "stroke",
        traçado: "stroke",
        delimitarCaixa: "bounding-box",
        tudo: "all",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EventosPonteiro.nomeFolEs, EventosPonteiro.nomeCss, pragmas);

        // Também pode receber valores do tipo SVG
        // Conferir em: https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events

        if (!variavel) validarValores(EventosPonteiro.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
