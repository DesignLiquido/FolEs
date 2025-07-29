import { Valor } from "../valores";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";
import { validarIdentificacaoPersonalizada } from "./validacoes/identificacao-personalizada";

export class NomeAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(["nome-animacao", "nome-animação"], "animation-name", pragmas);

        // TODO: Repensar
        //     if (valor.includes(" ") || valor.includes(",")) {
        //         validarAtribuicaoAbreviada("comum", "nome-animação", valores, this.valoresAceitos, undefined, false, true);
        //     } else {
        //         if (!(Object.keys(this.valoresAceitos).includes(valor)) && !(Object.keys(valoresGlobais).includes(valor))) {

        //             validarIdentificacaoPersonalizada("nome-animação", valor);
        //             this.valoresAceitos[valor] = valor;
        //         }
        //         validarValores("nome-animação", valores, this.valoresAceitos);
        //     }

        this.valores = valores;
    }
}
