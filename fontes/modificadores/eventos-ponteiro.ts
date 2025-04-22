import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EventosPonteiro extends Modificador {
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
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("eventos-ponteiro", "pointer-events", pragmas);

        // Também pode receber valores do tipo SVG
        // Conferir em: https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events

        if (!valorVariavel)
            validarValores("eventos-ponteiro", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
