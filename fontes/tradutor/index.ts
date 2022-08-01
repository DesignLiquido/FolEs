import { Declaracao } from "../declaracoes";
import { Modificador } from "../modificadores";
import estruturasHtml from "./estruturas-html";

export class Tradutor {
    traduzirModificador(modificador: Modificador): string {
        return `${modificador.propriedadeCss}: ${modificador.valor}${modificador.quantificador};`;
    }

    traduzir(declaracoes: Declaracao[]) {
        let resultado = "";

        for (const declaracao of declaracoes) {
            resultado += `${estruturasHtml[declaracao.seletor]} {`
            for (const modificador of declaracao.modificadores) {
                resultado += this.traduzirModificador(modificador);
            }
            resultado += `}`
        }

        return resultado;
    }
}