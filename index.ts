import * as fs from 'fs';
import { AvaliadorSintatico } from './fontes/avaliador-sintatico';
import { Lexador } from './fontes/lexador';
import { Tradutor } from './fontes/tradutor';

const dadosDoArquivo: Buffer = fs.readFileSync('./exemplos/exemplo.foles');
const conteudoDoArquivo: string[] = dadosDoArquivo
    .toString()
    .split('\n');

const lexador = new Lexador();
const avaliadorSintatico = new AvaliadorSintatico();
const tradutor = new Tradutor();

const resultadoLexador = lexador.mapear(conteudoDoArquivo);
// const resultadoAvaliadorSintatico = avaliadorSintatico.analisar(resultadoLexador.simbolos);
// const traducao = tradutor.traduzir(resultadoAvaliadorSintatico);
console.log(resultadoLexador);