import { AvaliadorSintatico } from "../../fontes/avaliador-sintatico";
import { Importador } from "../../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface } from "../../fontes/interfaces";
import { Lexador } from "../../fontes/lexador";
import { Serializador } from "../../fontes/serializadores";
import { AtribuicaoAbreviadaPR, AtribuicaoAbreviadaPREspecificas, AtribuicaoAbreviadaVQ, AtribuicaoAbreviadaVQePR, AtribuicaoSeparadaPorBarra, AtribuicaoSeparadaPorVirgula } from "../listas/atribuicao-abreviada";
import tiposDeSimbolos from "../../fontes/tipos-de-simbolos/foles";
import { SeletorModificador } from "../../fontes/modificadores/superclasse";
import { BlocoDeclaracao } from "../../fontes/declaracoes";
import { ValoresPersonalizados } from "../listas/valores-personalizados";

describe('Testando Seletores que recebem Valores Personalizados', () => {
    describe('Testes Unitários', () => {
        let lexador: LexadorInterface;
        let importador: ImportadorInterface;
        let avaliador: AvaliadorSintaticoInterface;
        let tradutor: Serializador;

        beforeEach(() => {
            lexador = new Lexador();
            importador = new Importador(lexador);
            avaliador = new AvaliadorSintatico(importador);
            tradutor = new Serializador();
        });

        it('Seletores que recebem valores personalizados (custom-indent) válidos', () => {
            for (let index = 0; index < ValoresPersonalizados.length; index += 1) {
                    // Lexador
                    const resultadoLexador = lexador.mapear([
                        "lmht {",
                        `${ValoresPersonalizados[index]['modificador']}: ${ValoresPersonalizados[index]['valor']};`,
                        "}"
                    ]);

                    // O Lexador não deve encontrar erros
                    expect(resultadoLexador.erros).toHaveLength(0);

                    // O valor recebido deve conter o símbolo IDENTIFICADOR
                    expect(resultadoLexador.simbolos).toEqual(
                        expect.arrayContaining([
                            expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
                        ])
                    );

                    // Avaliador Sintático
                    const resultadoAvaliadorSintatico = avaliador.analisar(resultadoLexador.simbolos);

                    // O Avaliador deve montar um objeto com os devidos nomes FolEs e CSS
                    expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
                    const primeiroResultado = resultadoAvaliadorSintatico[0];
                    expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);
                    const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
                    expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);
                    expect(primeiroResultadoTipado.modificadores[0].nomeFoles).toContain(
                        ValoresPersonalizados[index]['modificador']
                    );
                    expect(primeiroResultadoTipado.modificadores[0].propriedadeCss).toStrictEqual(
                        ValoresPersonalizados[index]['css']
                    );

                    // Tradutor
                    const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);

                    // O Tradutor deve serializar de acordo
                    expect(resultadoTradutor).toContain('html');
                    expect(resultadoTradutor).toContain(ValoresPersonalizados[index]['css']);
                    expect(resultadoTradutor).toContain(ValoresPersonalizados[index]['valor']);
            }
        });
    });
});
