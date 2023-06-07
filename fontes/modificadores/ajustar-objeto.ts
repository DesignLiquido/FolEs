import { valoresGlobais } from "./atributos/globais";
import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";

export class AjustarObjeto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conter": "contain",
        "cobrir": "cover",
        "preencher": "fill",
        "nenhum": "none",
        "diminuir-escala": "scale-down",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("ajustar-objeto", "object-fit");

        validarValores("ajustar-objeto", valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
