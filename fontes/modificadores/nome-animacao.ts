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
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(["nome-animacao", "nome-animação"], "animation-name", pragmas);

        if (!valorVariavel) {
            if (valor.includes(" ") || valor.includes(",")) {
                validarAtribuicaoAbreviada("comum", "nome-animação", valor, this.valoresAceitos, undefined, false, true);
            } else {
                if (!(Object.keys(this.valoresAceitos).includes(valor)) && !(Object.keys(valoresGlobais).includes(valor))) {
                    
                    validarIdentificacaoPersonalizada("nome-animação", valor);
                    this.valoresAceitos[valor] = valor;
                }
                validarValores("nome-animação", valor, this.valoresAceitos);
            }
        }

        this.valor = valor;
    }
}
