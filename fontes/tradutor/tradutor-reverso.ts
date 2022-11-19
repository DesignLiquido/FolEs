import { Declaracao } from "../declaracoes";
import { Modificador } from "../modificadores";

import estruturasLmht from "./estruturas-lmht";

export class TradutorReverso {
    traduzirModificador(modificador: Modificador): string {
        return `\t${Array.isArray(modificador.nomeFoles) ? modificador.nomeFoles[0] : modificador.nomeFoles}: ${modificador.valor}${modificador.quantificador};\n`;
    }

    traduzir(declaracoes: Declaracao[]) {
        let resultado = "";

        for (const declaracao of declaracoes) {
            resultado += `${estruturasLmht[declaracao.seletor]} {\n`
            for (const modificador of declaracao.modificadores) {
                resultado += this.traduzirModificador(modificador);
            }
            resultado += `}\n`
        }

        return resultado;
    }
}