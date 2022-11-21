import * as arquivos from 'fs';

import { AvaliadorSintatico } from "./avaliador-sintatico";
import { Lexador } from "./lexador";
import { Tradutor } from "./tradutor";

export class FolEs {
    lexador: Lexador;
    avaliadorSintatico: AvaliadorSintatico;
    tradutor: Tradutor;

    constructor() {
        this.lexador = new Lexador();
        this.avaliadorSintatico = new AvaliadorSintatico();
        this.tradutor = new Tradutor();
    }
    
    converterParaCss(nomeArquivo: string) {
        const dadosDoArquivo: Buffer = arquivos.readFileSync(nomeArquivo);
        const conteudoDoArquivo: string[] = dadosDoArquivo
            .toString()
            .split('\n');

        const resultadoLexador = this.lexador.mapear(conteudoDoArquivo);
        console.log(resultadoLexador);
        const resultadoAvaliadorSintatico = this.avaliadorSintatico.analisar(resultadoLexador.simbolos);
        const traducao = this.tradutor.traduzir(resultadoAvaliadorSintatico);
        console.log(traducao);
    }
}

// const teste = new FolEs();
// console.log(teste.converterParaCss('../exemplos/exemplo.foles'));