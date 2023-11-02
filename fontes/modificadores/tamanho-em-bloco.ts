import { Modificador, PragmasModificador } from "./superclasse";
import { unidadesMedida } from "./atributos/quantificadores";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class TamanhoEmBloco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("tamanho-em-bloco", "block-size", pragmas);

        validarValorNumerico('tamanho-em-bloco', valor, this.valoresAceitos);
        
        this.valor = valor;

        if (Number(parseInt(valor))){
            validarQuantificador('tamanho-em-bloco', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
