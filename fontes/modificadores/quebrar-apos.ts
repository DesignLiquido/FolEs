import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class QuebrarApos extends Modificador {
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
        super(["quebrar-apos", "quebrar-após"], "break-after", pragmas);

        if (!variavel) validarValores("quebrar-após", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
