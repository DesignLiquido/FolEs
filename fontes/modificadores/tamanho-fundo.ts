import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class TamanhoFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "alargar": "contain",
        "diminuir": "cover",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("tamanho-fundo", "background-size", pragmas);

        validarValorNumerico('tamanho-fundo', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))){ 
            validarQuantificador('tamanho-fundo', quantificador, unidadesMedida);
    
            this.quantificador = quantificador;
        }
    }
}
