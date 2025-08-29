import { AvaliadorSintatico } from "../fontes/avaliador-sintatico"
import { Importador } from "../fontes/importador";
import { AvaliadorSintaticoInterface, ImportadorInterface, LexadorInterface, ResultadoLexadorInterface } from "../fontes/interfaces";
import { Lexador } from "../fontes/lexador"
import { Resolvedor } from "../fontes/resolvedores";
import tiposDeSimbolos from "../fontes/tipos-de-simbolos/foles";
import { SeletorClasse, SeletorId } from "../fontes/seletores";
import { SeletorEspacoReservado } from "../fontes/seletores/seletor-espaco-reservado";
import { BlocoDeclaracao } from "../fontes/declaracoes";


describe('Testando seletores e estruturas', () => {
    let lexador: LexadorInterface;
    let importador: ImportadorInterface;
    let avaliadorSintatico: AvaliadorSintaticoInterface;
    let tradutor: Resolvedor;

    beforeEach(() => {
        lexador = new Lexador();
        importador = new Importador(lexador);
        avaliadorSintatico = new AvaliadorSintatico(importador);
        tradutor = new Resolvedor();
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

        // O Avaliador Sintático deve executar as operações normalmente, sem retornar erros
        expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
        expect(resultadoAvaliadorSintatico).toBeTruthy();
        expect(resultadoAvaliadorSintatico).toHaveLength(1);

        const primeiroResultado = resultadoAvaliadorSintatico[0];
        expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);

        const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
        expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

        // O Avaliador deve mapear uma instância da classe SeletorClasse
        expect(primeiroResultadoTipado.seletores[0]).toBeInstanceOf(SeletorClasse);

        // A classe mapeada deve ter o nome 'minha-classe'
        expect(primeiroResultadoTipado.seletores[0]['nomeClasse']).toBe('minha-classe');

        // O resultado do Avaliador deve ser recebido em um formato aceito pelo Serializador
        const resultadoTradutor = tradutor.resolver(resultadoAvaliadorSintatico);
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
        expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);

        const primeiroResultado = resultadoAvaliadorSintatico[0];
        expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);

        const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
        expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

        // O Avaliador deve mapear uma instância da classe SeletorClasse e com o nome 'classe-personalizada'
        expect(primeiroResultadoTipado.seletores[0]).toBeInstanceOf(SeletorClasse);
        expect(primeiroResultadoTipado.seletores[0]['nomeClasse']).toBe('classe-personalizada');

        // O Avaliador deve mapear devidamente a pseudoclasse
        expect(primeiroResultadoTipado.seletores[0].pseudoclasse).toBeTruthy();
        expect(primeiroResultadoTipado.seletores[0].pseudoclasse['nomeFoles']).toBe('foco');

        // O resultado do Avaliador deve ser recebido em um formato aceito pelo Serializador
        const resultadoTradutor = tradutor.resolver(resultadoAvaliadorSintatico);
        expect(resultadoTradutor).toBeTruthy();
    });

    it('Seletor Id - caso de sucesso', () => {
        // Lexador
        const resultadoLexador: ResultadoLexadorInterface = lexador.mapear([
            "#meu-id {",
            "margem-superior: 13mm;",
            "}"
        ]);

        // O Lexador deve montar um objeto de comprimento 9 sem retornar nenhum erro
        expect(resultadoLexador.simbolos).toHaveLength(9);
        expect(resultadoLexador.erros).toHaveLength(0);

        // O Lexador deve mapear os tipos de símbolo Cerquilha e Identificador que compõem a nomenclatura de um Id
        expect(resultadoLexador.simbolos).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ tipo: tiposDeSimbolos.CERQUILHA }),
                expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
            ])
        );

        // Avaliador Sintático
        const resultadoAvaliadorSintatico = avaliadorSintatico.analisar(resultadoLexador.simbolos);

        // O Avaliador Sintático deve executar as operações normalmente, sem retornar erros
        expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
        expect(resultadoAvaliadorSintatico).toBeTruthy();
        expect(resultadoAvaliadorSintatico).toHaveLength(1);

        const primeiroResultado = resultadoAvaliadorSintatico[0];
        expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);

        const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
        expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

        // O Avaliador deve mapear uma instância da classe SeletorClasse
        expect(primeiroResultadoTipado.seletores[0]).toBeInstanceOf(SeletorId);

        // O id mapeado deve ter o nome 'meu-id'
        expect(primeiroResultadoTipado.seletores[0]['id']).toBe('meu-id');

        // O resultado do Avaliador deve ser recebido em um formato aceito pelo Serializador
        const resultadoTradutor = tradutor.resolver(resultadoAvaliadorSintatico);
        expect(resultadoTradutor).toBeTruthy();
    });

    it('Seletor Id - caso de falha', () => {
        // Lexador - nome de classe escrito sem o ponto como prefixo
        const resultadoLexador: ResultadoLexadorInterface = lexador.mapear([
            "meu-id {",
            "margem-superior: 13mm;",
            "}"
        ]);

        // Avaliador Sintático deve retornar um erro por não reconhecer o identificador como nome de classe
        expect(() => {
            avaliadorSintatico.analisar(resultadoLexador.simbolos);
        }).toThrow(`Esperado '{' após declaração de seletor.`);
    });

    it('Seletor Id com pseudoclasse', () => {
        // Lexador
        const resultadoLexador: ResultadoLexadorInterface = lexador.mapear([
            "#id-personalizado:escopo {",
            "margem-superior: 13mm;",
            "}"
        ]);

        // O Lexador deve montar um objeto de comprimento 11 sem retornar nenhum erro
        expect(resultadoLexador.simbolos).toHaveLength(11);
        expect(resultadoLexador.erros).toHaveLength(0);

        // O Lexador deve mapear os tipos de símbolo Cerquilha e Identificador que compõem o id
        expect(resultadoLexador.simbolos).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ tipo: tiposDeSimbolos.CERQUILHA }),
                expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
            ])
        );

        // Avaliador Sintático
        const resultadoAvaliadorSintatico = avaliadorSintatico.analisar(resultadoLexador.simbolos);
        expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);

        const primeiroResultado = resultadoAvaliadorSintatico[0];
        expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);

        const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
        expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

        // O Avaliador deve mapear uma instância de SeletorId e com o nome 'id-personalizado'
        expect(primeiroResultadoTipado.seletores[0]).toBeInstanceOf(SeletorId);
        expect(primeiroResultadoTipado.seletores[0]['id']).toBe('id-personalizado');

        // O Avaliador deve mapear devidamente a pseudoclasse
        expect(primeiroResultadoTipado.seletores[0].pseudoclasse).toBeTruthy();
        expect(primeiroResultadoTipado.seletores[0].pseudoclasse['nomeFoles']).toBe('escopo');

        // O resultado do Avaliador deve ser recebido em um formato aceito pelo Serializador
        const resultadoTradutor = tradutor.resolver(resultadoAvaliadorSintatico);
        expect(resultadoTradutor).toBeTruthy();
    });

    it('Seletor Espaço Reservado - caso de sucesso', () => {
        // Lexador
        const resultadoLexador: ResultadoLexadorInterface = lexador.mapear([
            "%meu-seletor {",
            "borda: 13mm;",
            "}"
        ]);

        // O Lexador deve montar um objeto de comprimento 9 sem retornar nenhum erro
        expect(resultadoLexador.simbolos).toHaveLength(9);
        expect(resultadoLexador.erros).toHaveLength(0);

        // O Lexador deve mapear os tipos de símbolo Percentual e Identificador que compõem a estrutura de espaço reservado
        expect(resultadoLexador.simbolos).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ tipo: tiposDeSimbolos.PERCENTUAL }),
                expect.objectContaining({ tipo: tiposDeSimbolos.IDENTIFICADOR }),
            ])
        );

        // Avaliador Sintático
        const resultadoAvaliadorSintatico = avaliadorSintatico.analisar(resultadoLexador.simbolos);

        // O Avaliador Sintático deve executar as operações normalmente, sem retornar erros
        expect(resultadoAvaliadorSintatico.length).toBeGreaterThanOrEqual(1);
        expect(resultadoAvaliadorSintatico).toBeTruthy();
        expect(resultadoAvaliadorSintatico).toHaveLength(1);

        const primeiroResultado = resultadoAvaliadorSintatico[0];
        expect(primeiroResultado).toBeInstanceOf(BlocoDeclaracao);

        const primeiroResultadoTipado = primeiroResultado as BlocoDeclaracao;
        expect(primeiroResultadoTipado.modificadores.length).toBeGreaterThanOrEqual(1);

        // O Avaliador deve mapear uma instância da classe SeletorEspaçoReservado
        expect(primeiroResultadoTipado.seletores[0]).toBeInstanceOf(SeletorEspacoReservado);

        // O resultado do Avaliador deve ser recebido em um formato aceito pelo Serializador
        const resultadoTradutor = tradutor.resolver(resultadoAvaliadorSintatico);
        expect(resultadoTradutor).toHaveLength(0);
    });

    it('Seletor Espaço Reservado - caso de falha', () => {
        // Lexador
        const resultadoLexador: ResultadoLexadorInterface = lexador.mapear([
            "% {",
            ": 13mm;",
            "}"
        ]);

        // O Lexador deve montar um objeto de comprimento 7 sem retornar nenhum erro
        expect(resultadoLexador.simbolos).toHaveLength(7);
        expect(resultadoLexador.erros).toHaveLength(0);

        // O Lexador deve mapear o tipo de símbolo Percentual
        expect(resultadoLexador.simbolos).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ tipo: tiposDeSimbolos.PERCENTUAL }),
            ])
        );

        // Avaliador Sintático deve retornar um erro por não reconhecer o identificador
        expect(() => {
            avaliadorSintatico.analisar(resultadoLexador.simbolos);
        }).toThrow('Esperado identificador válido para espaço reservado.');
    });
});
