import { AvaliadorSintatico } from "../fontes/avaliador-sintatico"
import { Importador } from "../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface, ResultadoLexadorInterface } from "../fontes/interfaces";
import { Lexador } from "../fontes/lexador"
import { Serializador } from "../fontes/serializadores";
import tiposDeSimbolos from "../fontes/tipos-de-simbolos/foles";
import { SeletorClasse, SeletorId } from "../fontes/seletores";


describe('Testando seletores e estruturas', () => {
    let lexador: LexadorInterface;
    let importador: ImportadorInterface;
    let avaliadorSintatico: AvaliadorSintaticoInterface;
    let tradutor: Serializador;

    beforeEach(() => {
        lexador = new Lexador();
        importador = new Importador(lexador);
        avaliadorSintatico = new AvaliadorSintatico(importador);
        tradutor = new Serializador();
    });

    it('Seletor Classe - caso de sucesso', () => {
        // Lexador
        const resultadoLexador: ResultadoLexadorInterface = lexador.mapear([
            ".minha-classe {",
                "margem-superior: 13mm;",
            "}"
        ]);

        // O Lexador deve montar um objeto de comprimento 9 sem retornar nenhum erro
        expect(resultadoLexador.simbolos).toHaveLength(9);
        expect(resultadoLexador.erros).toHaveLength(0);

        // O Lexador deve mapear os tipos de símbolo Ponto e Identificador que compõem o nome da classe
        expect(resultadoLexador.simbolos).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ tipo: tiposDeSimbolos.PONTO }),
                expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
            ])
        );

        // Avaliador Sintático
        const resultadoAvaliadorSintatico = avaliadorSintatico.analisar(resultadoLexador.simbolos);
        console.log(resultadoAvaliadorSintatico);

        // O Avaliador Sintático deve executar as operações normalmente, sem retornar erros
        expect(resultadoAvaliadorSintatico).toBeTruthy();
        expect(resultadoAvaliadorSintatico).toHaveLength(1);

        // O Avaliador deve mapear uma instância da classe SeletorClasse
        expect(resultadoAvaliadorSintatico[0].seletores[0]).toBeInstanceOf(SeletorClasse);

        // A classe mapeada deve ter o nome 'minha-classe'
        expect(resultadoAvaliadorSintatico[0].seletores[0]['nomeClasse']).toBe('minha-classe');

        // O resultado do Avaliador deve ser recebido em um formato aceito pelo Serializador
        const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
        expect(resultadoTradutor).toBeTruthy();
    });

    it('Seletor Classe - caso de falha', () => {
        // Lexador - nome de classe escrito sem o ponto como prefixo
        const resultadoLexador: ResultadoLexadorInterface = lexador.mapear([
            "minha-classe {",
                "margem-superior: 13mm;",
            "}"
        ]);

        // Avaliador Sintático deve retornar um erro por não reconhecer o identificador como nome de classe
        expect(() => {
            avaliadorSintatico.analisar(resultadoLexador.simbolos);
        }).toThrow(`Esperado '{' após declaração de seletor.`);
    });

    it('Seletor Classe com pseudoclasse', () => {
        // Lexador
        const resultadoLexador: ResultadoLexadorInterface = lexador.mapear([
            ".classe-personalizada:foco {",
                "margem-superior: 13mm;",
            "}"
        ]);

        // O Lexador deve montar um objeto de comprimento 11 sem retornar nenhum erro
        expect(resultadoLexador.simbolos).toHaveLength(11);
        expect(resultadoLexador.erros).toHaveLength(0);

        // O Lexador deve mapear os tipos de símbolo Ponto e Identificador que compõem o nome da classe
        expect(resultadoLexador.simbolos).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ tipo: tiposDeSimbolos.PONTO }),
                expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
            ])
        );

        // Avaliador Sintático
        const resultadoAvaliadorSintatico = avaliadorSintatico.analisar(resultadoLexador.simbolos);
        console.log(resultadoAvaliadorSintatico[0].seletores[0]);

        // O Avaliador deve mapear uma instância da classe SeletorClasse e com o nome 'classe-personalizada'
        expect(resultadoAvaliadorSintatico[0].seletores[0]).toBeInstanceOf(SeletorClasse);
        expect(resultadoAvaliadorSintatico[0].seletores[0]['nomeClasse']).toBe('classe-personalizada');

        // O Avaliador deve mapear devidamente a pseudoclasse
        expect(resultadoAvaliadorSintatico[0].seletores[0].pseudoclasse).toBeTruthy();
        expect(resultadoAvaliadorSintatico[0].seletores[0].pseudoclasse['nomeFoles']).toBe('foco');

        // O resultado do Avaliador deve ser recebido em um formato aceito pelo Serializador
        const resultadoTradutor = tradutor.serializar(resultadoAvaliadorSintatico);
        expect(resultadoTradutor).toBeTruthy();
    });
});
