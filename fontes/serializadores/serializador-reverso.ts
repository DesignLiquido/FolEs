import { BlocoDeclaracao, Declaracao } from "../declaracoes";
import { Modificador } from "../modificadores";
import { Valor } from "../valores";
import { MetodoCss } from "../valores/metodos/css/metodo-css";
import { Metodo } from "../valores/metodos/foles/metodo";

/**
 * O serializador reverso traduz de CSS para FolEs. Pode traduzir tanto FolEs
 * aninhado quanto desaninhado.
 */
export class SerializadorReverso {
    serializarComAninhamentos: boolean;

    constructor(serializarComAninhamentos: boolean = true) {
        this.serializarComAninhamentos = serializarComAninhamentos;
    }

    protected serializarValor(valor: Valor): string {
        if (valor instanceof MetodoCss) {
            return valor.paraTexto();
        } 
        
        if (valor instanceof Metodo) {
            return valor.paraTexto();
        } 
        
        return String(valor);
    }

    serializarModificador(
        modificador: Modificador,
        indentacao: number = 0,
    ): string {
        let valoresResolvidos = "";
        for (const valor of modificador.valores) {
            valoresResolvidos += this.serializarValor(valor) + " ";
        }
        
        valoresResolvidos = valoresResolvidos.slice(0, -1);

        return (
            " ".repeat(indentacao) +
            `${Array.isArray(modificador.nomeFoles) ? modificador.nomeFoles[0] : modificador.nomeFoles}: ${valoresResolvidos};\n`
        );
    }

    serializar(
        declaracoes: Declaracao[],
        indentacao: number = 0,
        seletorAnterior: string = undefined,
    ) {
        let resultado = "";
        let textoSeletorAnterior = "";
        if (seletorAnterior !== undefined) {
            textoSeletorAnterior = seletorAnterior;
        }

        for (const declaracao of declaracoes) {
            const prefixos = [];

            if (declaracao instanceof BlocoDeclaracao) {
                for (const seletor of declaracao.seletores) {
                    const prefixo = (
                        textoSeletorAnterior +
                        " " +
                        seletor.paraTexto()
                    ).trimStart();
                    prefixos.push(prefixo);
                    resultado += " ".repeat(indentacao) + prefixo + ", ";
                }

                resultado = resultado.slice(0, -2);
                resultado += " {\n";

                for (const modificador of declaracao.modificadores) {
                    resultado += this.serializarModificador(
                        modificador,
                        indentacao + 4,
                    );
                }

                if (this.serializarComAninhamentos) {
                    resultado += this.serializar(
                        declaracao.declaracoesAninhadas,
                        indentacao + 4,
                    );

                    resultado += `${" ".repeat(indentacao)}}\n\n`;
                } else {
                    resultado += `${" ".repeat(indentacao)}}\n\n`;

                    for (const prefixo of prefixos) {
                        resultado += this.serializar(
                            declaracao.declaracoesAninhadas,
                            indentacao,
                            prefixo,
                        );
                    }
                }
            }
        }

        // TODO: Adicionar caso if (declaracao instanceof DeclaracaoVariavel)

        return resultado;
    }
}
