import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class AlinharTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        justificar: "justify",
        "justificar-tudo": "justify-all",
        "combinar-elemento-pai": "match-parent",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("alinhar-texto", "text-align", pragmas);

        if (!valorVariavel)
            validarValoresAdicionais(
                "alinhar-texto",
                valores,
                posicoesBasicas,
                this.valoresAceitos,
            );

        this.valores = valores;
    }
}
