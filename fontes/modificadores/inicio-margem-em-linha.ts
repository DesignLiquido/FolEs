import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class InicioMargemEmLinha extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    static nomeCss: string = "margin-inline-start";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["inicio-margem-em-linha", "início-margem-em-linha"],
            InicioMargemEmLinha.nomeCss,
            pragmas,
        );
        
        if (!variavel) {
            validarValorNumerico(
                "início-margem-em-linha",
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
