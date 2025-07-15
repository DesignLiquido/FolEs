import { MetodoCss } from "../valores/metodos/css/metodo-css";
import { Metodo } from "../valores/metodos/foles/metodo";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";
import { validarQuantificador } from "./validacoes/quantificador";

export class SombraCaixa extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
    };

    constructor(
        valor: Metodo | MetodoCss | string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("sombra-caixa", "box-shadow", pragmas);

        if (!valorVariavel) {
            validarMultiplosQualitativos("sombra-caixa", valor);

            if (typeof valor === 'string' && Number(parseInt(valor))) {
                validarQuantificador(
                    "sombra-caixa",
                    quantificador,
                    unidadesMedida,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
