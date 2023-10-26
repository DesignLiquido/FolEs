import { Declaracao } from "../declaracoes";
import { Modificador } from "../modificadores";
import { Metodo } from "../valores/metodos/metodo";

import estruturasLmht from "./estruturas-lmht";

export class TradutorReverso {
    traduzirModificador(modificador: Modificador, indentacao: number = 0): string {
        let quantificador = "";
        if (modificador.hasOwnProperty("quantificador")) {
            quantificador = modificador.quantificador;
        }

        let valor = "";
        if (modificador.valor instanceof Metodo) {
            valor = (<Metodo>modificador.valor).paraTexto();
        } else {
            valor = modificador.valor;
        }

        return " ".repeat(indentacao) + 
            `${Array.isArray(modificador.nomeFoles) ? modificador.nomeFoles[0] : modificador.nomeFoles}: ${valor}${quantificador};\n`;
    }

    traduzir(declaracoes: Declaracao[], indentacao: number = 0) {
        let resultado = "";

        for (const declaracao of declaracoes) {
            for (const seletor of declaracao.seletores) {
                resultado += " ".repeat(indentacao) + seletor.constructor.name.toLowerCase() + ', ';
            }

            resultado = resultado.slice(0, -2);
            resultado += ' {\n';
            
            for (const modificador of declaracao.modificadores) {
                resultado += this.traduzirModificador(modificador, indentacao + 2);
            }
            
            resultado += this.traduzir(
                declaracao.declaracoesAninhadas,
                indentacao + 2
            );

            resultado += `${" ".repeat(indentacao)}}\n\n`;
        }

        return resultado;
    }
}