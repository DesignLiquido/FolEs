import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class TamanhoOpticoFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["tamanho-optico-fonte", "tamanho-óptico-fonte"],
            "font-optical-sizing"
        );

        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'tamanho-óptico-fonte' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
