import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class QuebrarApos extends Modificador {
    static nomeFolEs: string[] = ["quebrar-apos", "quebrar-após"];
    static nomeCss: string = "break-after";
    static descricao: string = 'Define como as quebras de página, de coluna ou de região devem se comportar após de uma caixa.';
    static documentacao: string = '# `quebrar-após`\n Se não houver nenhuma caixa gerada, a propriedade será ignorada.';
    static exemploCodigo: string = 'p {\n  quebrar-após: sempre;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        evitar: "avoid",
        sempre: "always",
        tudo: "all",
        "evitar-pagina": "avoid-page",
        "evitar-página": "avoid-page",
        pagina: "page",
        página: "page",
        esquerda: "left",
        direita: "right",
        frente: "recto",
        verso: "verso",
        "evitar-coluna": "avoid-column",
        coluna: "column",
        "evitar-regiao": "avoid-region",
        "evitar-região": "avoid-region",
        regiao: "region",
        região: "region",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(QuebrarApos.nomeFolEs, QuebrarApos.nomeCss, pragmas);

        if (!variavel) validarValores(QuebrarApos.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
