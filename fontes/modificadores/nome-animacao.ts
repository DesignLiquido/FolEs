import { NUltimoFilho } from "../pseudoclasses/n-último-filho";
import { Valor, ValorQualitativo } from "../valores";
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
        variavel?: boolean
    ) {
        super(["nome-animacao", "nome-animação"], "animation-name", pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "comum",
                    "nome-animação",
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    false,
                    true
                );
            } else {
                const valor = valores[0] as ValorQualitativo;
                const globais: Array<string> = Object.keys(valoresGlobais);
                const aceitos: Array<string> = Object.keys(this.valoresAceitos);
                if (globais.includes(valor.qualitativo) || aceitos.includes(valor.qualitativo)) {
                    validarValores(
                        "nome-animação",
                        valores,
                        this.valoresAceitos,
                        null
                    );
                } else {
                    validarIdentificacaoPersonalizada(
                        "nome-animação",
                        valor,
                        this.valoresAceitos
                    );
                }
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
