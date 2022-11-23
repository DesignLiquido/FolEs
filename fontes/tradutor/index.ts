import { Declaracao } from "../declaracoes";
import { Modificador } from "../modificadores";
import estruturasHtml from "./estruturas-html";

export class Tradutor {
    traduzirModificador(modificador: Modificador): string {
        return `\t${modificador.propriedadeCss}: ${modificador.valor}${modificador.quantificador};\n`;
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