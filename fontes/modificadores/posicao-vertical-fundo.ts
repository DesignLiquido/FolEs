import { posicoesBasicas } from "./atributos/posicoes";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class PosicaoVerticalFundo extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["posicao-vertical-fundo", "posição-vertical-fundo"],
            "background-position-y"
        );

        // Aceita valores listados e valores numéricos
        // Também pode receber dois valores
        // Ex.: posição-vertical-fundo: inferior 10%;

        // TODO: Adaptar lógica para cobrir todos os casos

        validarValorNumerico('posição-vertical-fundo', valor, posicoesBasicas);

        this.valor = valor;
        
        if (Number(parseInt(valor))){   
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(`Propriedade 'posição-vertical-fundo' com quantificador inválido. Valores aceitos: 
                ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }
    
            this.quantificador = quantificador;
        }
    }
}
