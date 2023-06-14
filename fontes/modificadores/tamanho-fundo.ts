import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TamanhoFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "alargar": "contain",
        "diminuir": "cover",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("tamanho-fundo", "background-size");

        // Aceita valores listados e número-quantificador
        // OBS.: Também aceita receber DOIS valores. A lógica abaixo cobre o recebimento de UM valor.
        // TODO: Adaptar lógica no futuro
        validarValorNumerico('tamanho-fundo', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))){  
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`Propriedade 'tamanho-fundo' com quantificador inválido. Valores aceitos:
                ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }
    
            this.quantificador = quantificador;
        }
    }
}
