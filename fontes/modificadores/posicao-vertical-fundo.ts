import { posicoesBasicas } from "./atributos/posicoes";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class PosicaoVerticalFundo extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["posicao-vertical-fundo", "posição-vertical-fundo"],
            "background-position-y", 
            pragmas
        );

        validarValorNumerico('posição-vertical-fundo', valor, posicoesBasicas);

        this.valor = valor;
        
        if (Number(parseInt(valor))){
            validarQuantificador('posição-vertical-fundo', quantificador, unidadesMedida);
    
            this.quantificador = quantificador;
        }
    }
}
