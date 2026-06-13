import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class QuebrarDentro extends Modificador {
    static nomeFolEs: string = "quebrar-dentro";
    static nomeCss: string = "break-inside";
    static descricao: string = 'Define como as quebras de página, de coluna ou de região devem se comportar dentro de uma caixa.';
    static documentacao: string = '# `quebrar-dentro`\nSe não houver nenhuma caixa gerada, a propriedade será ignorada.';
    static exemploCodigo: string = 'p {\n  quebrar-dentro: evitar-coluna;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        evitar: "avoid",
        "evitar-pagina": "avoid-page",
        "evitar-página": "avoid-page",
        "evitar-coluna": "avoid-column",
        "evitar-regiao": "avoid-region",
        "evitar-região": "avoid-region",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(QuebrarDentro.nomeFolEs, QuebrarDentro.nomeCss, pragmas);

        if (!variavel) validarValores(QuebrarDentro.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
