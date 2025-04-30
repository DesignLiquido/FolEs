import { ValorPercentual } from "../../testes/listas/valor-quantificador";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";
import { validarQuantificador } from "./validacoes/quantificador";

export class Fundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        fixo: "fixed",
        local: "local",
        rolar: "scroll",
        borda: "border-box",
        preenchimento: "padding-box",
        conteudo: "content-box",
        conteúdo: "content-box",
        texto: "text",
        superior: "top",
        inferior: "bottom",
        esquerda: "left",
        direita: "right",
        centro: "center",
        "repetir-horizontal": "repeat-x",
        "repetir-vertical": "repeat-y",
        repetir: "repeat",
        espacar: "space",
        espaçar: "space",
        completar: "round",
        "nao-repetir": "no-repeat",
        "não-repetir": "no-repeat",
        alargar: "contain",
        diminuir: "cover",
        auto: "auto",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("fundo", "background", pragmas);

        if (!valorVariavel) {
            if (valor.includes(" ")) {
                validarAtribuicaoAbreviada("múltiplos-qualitativos", "fundo", valor, this.valoresAceitos);
            } else {
                validarMultiplosQualitativos("fundo", valor, this.valoresAceitos);
            }

            if (Number(parseInt(valor))) {
                validarQuantificador(
                    "fundo",
                    quantificador,
                    unidadesMedida,
                    ValorPercentual,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
