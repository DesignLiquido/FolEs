import { Modificador, PragmasModificador } from "./superclasse";
import { unidadesMedida } from "./atributos/quantificadores";
import { validarQuantificador } from "./validacoes/quantificador";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";

export class Borda extends Modificador {
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
        super("borda", "border", pragmas);

        if (!valorVariavel) {
            if (valor.includes(" ")) {
                validarAtribuicaoAbreviada("múltiplos-qualitativos", "borda", valor, this.valoresAceitos);
            } else {
                validarMultiplosQualitativos("borda", valor, this.valoresAceitos);
            }

            if (Number(parseInt(valor))) {
                validarQuantificador("borda", quantificador, unidadesMedida);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
