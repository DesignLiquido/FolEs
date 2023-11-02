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

        // Aceita valores listados e valores numéricos
        // Também pode receber dois valores
        // Ex.: posição-vertical-fundo: inferior 10%;

        // TODO: Adaptar lógica para cobrir todos os casos

        validarValorNumerico('posição-vertical-fundo', valor, posicoesBasicas);

        this.valor = valor;
        
        if (Number(parseInt(valor))){
            validarQuantificador('posição-vertical-fundo', quantificador, unidadesMedida);
    
            this.quantificador = quantificador;
        }
    }
}
