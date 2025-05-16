import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";
import { validarQuantificador } from "./validacoes/quantificador";

export class BordaInferior extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        espessa: "thick",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("borda-inferior", "border-bottom", pragmas);

        if (!valorVariavel) {
            if (valor.includes(" ")) {
                validarAtribuicaoAbreviada("múltiplos-qualitativos", "borda-direita", valor, this.valoresAceitos);
            } else {
                validarMultiplosQualitativos("borda-inferior", valor, this.valoresAceitos);
            }

            if (Number(parseInt(valor))) {
                validarQuantificador("borda-inferior", quantificador, unidadesMedida);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
