import { Declaracao } from "../declaracoes";
import { Modificador } from "../modificadores";
import { valoresGerais } from "../modificadores/atributos/gerais";
import estruturasHtml from "./estruturas-html";

export class Tradutor {
    traduzirModificador(modificador: Modificador): string {
        // Caso 1: Número-Quantificador ou somente Número. 
        if (Number(modificador.valor)){
            return `\t${modificador.propriedadeCss}: ${modificador.valor}${modificador.quantificador || ''};\n`;
        } else {
            
            // Caso 2: Tradução do valor contida no objeto 'valoresAceitos'.
            if (modificador['valoresAceitos'] !== undefined && 
                modificador['valoresAceitos'].hasOwnProperty(modificador.valor)
            ){
                const objetoValores = modificador['valoresAceitos'];
                const valorTraduzido = objetoValores[modificador.valor];
                return `\t${modificador.propriedadeCss}: ${valorTraduzido};\n`;
            }
            
            // Caso 3: Valor é RGB, RGBA, HSL, HSLA ou HEX, ou seja, um valor do tipo objeto. 
            if (typeof(modificador.valor) === 'object') {
                return `\t${modificador.propriedadeCss}: ${modificador.valor}${modificador.quantificador || ''};\n`;
            } 
            
            // Caso 4: É um valor genérico, cuja tradução está na lista 'valoresGerais'.
            else {
                const valorTraduzido = valoresGerais[modificador.valor];
                return `\t${modificador.propriedadeCss}: ${valorTraduzido};\n`; 
            }
        }
    }

    traduzir(declaracoes: Declaracao[]) {
        let resultado = "";

        for (const declaracao of declaracoes) {
            if (declaracao.placeholder) {
                const encontrarHtml = Object.keys(estruturasHtml).filter(
                    (estrutura) => declaracao.seletor === estrutura
                );

                if (encontrarHtml.length !== 0) {
                    resultado += `${declaracao.placeholder}${estruturasHtml[declaracao.seletor]} {\n`
                } else {
                    resultado += `${declaracao.placeholder}${declaracao.seletor} {\n`
                }
                
            } else {
                resultado += `${estruturasHtml[declaracao.seletor]} {\n`
            }

            for (const modificador of declaracao.modificadores) {
                resultado += this.traduzirModificador(modificador);
            }
            resultado += `}\n`
        }

        return resultado;
    }
}