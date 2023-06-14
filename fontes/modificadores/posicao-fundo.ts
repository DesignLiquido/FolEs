import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class PosicaoFundo extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["posicao-fundo", "posição-fundo"], "background-position");

        // OBS.: posição-fundo pode receber dois valores-quantificadores também
        // Exemplo: posição-fundo: 25% 75%;
        // No momento, as validações desse modificador cobrem somente os casos de 
        // 1 valor-quantificador e as palavras reservadas aceitas.

        validarValorNumerico('posição-fundo', valor, posicoesBasicas);

        this.valor = valor;

        if (Number(parseInt(valor))){
            const quantificadoresAceitos = [
                'px', '%', 'rem', 'vmin', 'vmax'
            ];
    
            if (!quantificadoresAceitos.includes(quantificador) || quantificador === undefined) {
                throw new Error(`Propriedade 'posição-fundo' com quantificador ${quantificador} inválido. Valores aceitos: ${quantificadoresAceitos}.`);
            }
    
            this.quantificador = quantificador;
        }
    }
}
