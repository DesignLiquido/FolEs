import { valoresGlobais } from "./atributos/globais";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class EstenderBordaImagem extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("estender-borda-imagem", "border-image-outset");

        // Pode receber também mais de um valor número-quantificador
        // Ex.: estender-borda-imagem: 7px 12px 14px 5px;
        // A lógica abaixo cobre apenas o recebimento de UM único valor
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'estender-borda-imagem' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
                ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            
            // Verificação parte da lista de Comprimento, e não da de Quantificadores,
            // pois o modificador não aceita valores percentuais. 
            if (
                !(quantificador in comprimentos) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'estender-borda-imagem' com quantificador inválido. Valores aceitos:
                ${Object.keys(comprimentos).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
