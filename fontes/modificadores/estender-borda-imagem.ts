import { ListaDeValoresGlobais } from "./atributos/globais";
import { ListaDeComprimento } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class EstenderBordaImagem extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("estender-borda-imagem", "border-image-outset");

        // Pode receber também mais de um valor número-quantificador
        // Ex.: estender-borda-imagem: 7px 12px 14px 5px;
        // A lógica abaixo cobre apenas o recebimento de UM único valor
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'estender-borda-imagem' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
                ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            
            // Verificação parte da lista de Comprimento, e não da de Quantificadores,
            // pois o modificador não aceita valores percentuais. 
            if (
                !(quantificador in ListaDeComprimento) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'estender-borda-imagem' com quantificador inválido. Valores aceitos:
                ${Object.keys(ListaDeComprimento).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
