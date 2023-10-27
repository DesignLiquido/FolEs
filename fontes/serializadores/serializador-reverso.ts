import { Declaracao } from "../declaracoes";
import { Modificador } from "../modificadores";
import { Metodo } from "../valores/metodos/metodo";

/**
 * O serializador reverso traduz de CSS para FolEs. Pode traduzir tanto FolEs
 * aninhado quanto desaninhado.
 */
export class SerializadorReverso {
    serializarComAninhamentos: boolean;

    constructor(serializarComAninhamentos: boolean = true) {
        this.serializarComAninhamentos = serializarComAninhamentos;
    }

    serializarModificador(modificador: Modificador, indentacao: number = 0): string {
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

    serializar(declaracoes: Declaracao[], indentacao: number = 0, seletorAnterior: string = undefined) {
        let resultado = "";
        let textoSeletorAnterior = "";
        if (seletorAnterior !== undefined) {
            textoSeletorAnterior = seletorAnterior;
        }

        for (const declaracao of declaracoes) {
            const prefixos = [];
            
            for (const seletor of declaracao.seletores) {
                const prefixo = (textoSeletorAnterior + " " + seletor.constructor.name.toLowerCase()).trimStart();
                prefixos.push(prefixo);
                resultado += " ".repeat(indentacao) + prefixo + ', ';
            }

            resultado = resultado.slice(0, -2);
            resultado += ' {\n';
            
            for (const modificador of declaracao.modificadores) {
                resultado += this.serializarModificador(modificador, indentacao + 2);
            }

            if (this.serializarComAninhamentos) {
                resultado += this.serializar(
                    declaracao.declaracoesAninhadas,
                    indentacao + 2
                );

                resultado += `${" ".repeat(indentacao)}}\n\n`;
            } else {
                resultado += `${" ".repeat(indentacao)}}\n\n`;

                for (const prefixo of prefixos) {
                    resultado += this.serializar(
                        declaracao.declaracoesAninhadas,
                        indentacao,
                        prefixo
                    );
                }
            }
        }

        return resultado;
    }
}
