import { ListaDeValoresGlobais } from "./atributos/globais";
import { ListaDeQuantificadores } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class LarguraInicioBordaEmBloco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "fina": "thin",
        "medio": "medium",
        "médio": "medium",
        "grossa": "thick",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["largura-inicio-borda-em-bloco", "largura-início-borda-em-bloco"],
            "border-block-start-width"
        );

        // Pode receber valores próprios ou número-quantificador
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'largura-início-borda-em-bloco' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))){
            if (
                !(quantificador in ListaDeQuantificadores) ||
                quantificador === undefined
            ) {
                throw new Error(
                `Propriedade 'largura-início-borda-em-bloco' com quantificador inválido. Valores aceitos:
                ${Object.keys(ListaDeQuantificadores).reduce((final, atual) => final += `, ${atual}`)}.`);
            }
    
            this.quantificador = quantificador;
        }
    }
}
