import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";

export class NomeAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(["nome-animacao", "nome-animação"], "animation-name", pragmas);

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "comum",
                "nome-animação",
                valores,
                this.valoresAceitos,
            );
            // TODO: Recebia validacaoPersonalizada como true
        } else {
            validarValores(
                "nome-animação",
                valores,
                this.valoresAceitos
            );
        }

        this.valores = valores;
    }
}
