import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class InsercaoEmBloco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["insercao-em-bloco", "inserção-em-bloco"],
            "inset-block",
            pragmas,
        );
        
        if (!variavel) {
            validarValorNumerico(
                "inserção-em-bloco",
                valores,
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        }
        
        this.valores = valores;
        this.variavel = variavel;
    }
}
