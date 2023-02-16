import { listaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class ImpressaoAjusteCor extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "economizar": "economy",
        "exata": "exact",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["impressao-ajuste-cor", "impressão-ajuste-cor"],
            "print-color-adjust"
        );

        if (!(valor in this.valoresAceitos) &&
            !(valor in listaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'impressão-ajuste-cor' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
