import { Abreviacao } from "./lmht/abreviacao";
import { Aparte } from "./lmht/aparte";
import { Area } from "./lmht/area";
import { AreaTexto } from "./lmht/area-texto";
import { Artigo } from "./lmht/artigo";
import { Aspas } from "./lmht/aspas";
import { Audio } from "./lmht/audio";
import { Botao } from "./lmht/botao";
import { Cabeca } from "./lmht/cabeca";
import { CabecaTabela } from "./lmht/cabeca-tabela";
import { Campo } from "./lmht/campo";
import { Campos } from "./lmht/campos";
import { Canvas } from "./lmht/canvas";
import { Celula } from "./lmht/celula";
import { Citacao } from "./lmht/citacao";
import { Codigo } from "./lmht/codigo";
import { Coluna } from "./lmht/coluna";
import { Corpo } from "./lmht/corpo";
import { CorpoTabela } from "./lmht/corpo-tabela";
import { Definicao } from "./lmht/definicao";
import { Detalhes } from "./lmht/detalhes";
import { Divisao } from "./lmht/divisao";
import { Endereco } from "./lmht/endereco";
import { EnvelopeTexto } from "./lmht/envelope-texto";
import { Etiqueta } from "./lmht/etiqueta";
import { Excluido } from "./lmht/excluido";
import { Exemplo } from "./lmht/exemplo";
import { Formulario } from "./lmht/formulario";
import { GrupoColunas } from "./lmht/grupo-colunas";
import { GrupoOpcoes } from "./lmht/grupo-opcoes";
import { Imagem } from "./lmht/imagem";
import { Invisivel } from "./lmht/invisivel";
import { Italico } from "./lmht/italico";
import { ItemLista } from "./lmht/item-lista";
import { Ligacao } from "./lmht/ligacao";
import { Linha } from "./lmht/linha";
import { LinhaHorizontal } from "./lmht/linha-horizontal";
import { ListaDefinicoes } from "./lmht/lista-definicoes";
import { ListaNumerada } from "./lmht/lista-numerada";
import { ListaPesquisavel } from "./lmht/lista-pesquisavel";
import { ListaSimples } from "./lmht/lista-simples";
import { Lmht } from "./lmht/lmht";
import { Marca } from "./lmht/marca";
import { Medidor } from "./lmht/medidor";
import { Navegacao } from "./lmht/navegacao";
import { Negrito } from "./lmht/negrito";
import { Objeto } from "./lmht/objeto";
import { Opcao } from "./lmht/opcao";
import { Paragrafo } from "./lmht/paragrafo";
import { Preformatado } from "./lmht/preformatado";
import { Principal } from "./lmht/principal";
import { Progresso } from "./lmht/progresso";
import { QuebraLinha } from "./lmht/quebra-linha";
import { QuebraLinhaOportuna } from "./lmht/quebra-linha-oportuna";
import { Recurso } from "./lmht/recurso";
import { Riscado } from "./lmht/riscado";
import { Script } from "./lmht/script";
import { Secao } from "./lmht/secao";
import { Selecao } from "./lmht/selecao";
import { SemScript } from "./lmht/sem-script";
import { Sobrescrito } from "./lmht/sobrescrito";
import { Sublinhado } from "./lmht/sublinhado";
import { Subscrito } from "./lmht/subscrito";
import { Sumario } from "./lmht/sumario";
import { Tabela } from "./lmht/tabela";
import { Teclado } from "./lmht/teclado";
import { Tempo } from "./lmht/tempo";
import { Termo } from "./lmht/termo";
import { TextoPequeno } from "./lmht/texto-pequeno";
import { Titulo1 } from "./lmht/titulo1";
import { Titulo2 } from "./lmht/titulo2";
import { Titulo3 } from "./lmht/titulo3";
import { Titulo4 } from "./lmht/titulo4";
import { Titulo5 } from "./lmht/titulo5";
import { Titulo6 } from "./lmht/titulo6";
import { Variavel } from "./lmht/variavel";

export const DicionarioEstruturasHtml: { [nomeCss: string]: any } = {
    "abbr": Abreviacao,
    "aside": Aparte,
    "area": Area,
    "textarea": AreaTexto,
    "article": Artigo,
    "q": Aspas,
    "audio": Audio,
    "button": Botao,
    "head": Cabeca,
    "thead": CabecaTabela,
    "input": Campo,
    "fieldset": Campos,
    "canvas": Canvas,
    "td": Celula,
    "blockquote": Citacao, 
    "code": Codigo,
    "col": Coluna,
    "body": Corpo,
    "tbody": CorpoTabela,
    "dfn": Definicao,
    "details": Detalhes,
    "div": Divisao,
    "address": Endereco,
    "span": EnvelopeTexto,
    "label": Etiqueta,
    "del": Excluido,
    "samp": Exemplo,
    "form": Formulario,
    "colgroup": GrupoColunas,
    "optgroup": GrupoOpcoes,
    "img": Imagem,
    "ins": Invisivel,
    "em": Italico,
    "li": ItemLista,
    "a": Ligacao,
    "tr": Linha,
    "hr": LinhaHorizontal,
    "dl": ListaDefinicoes,
    "ol": ListaNumerada,
    "datalist": ListaPesquisavel,
    "ul": ListaSimples,
    "html": Lmht,
    "mark": Marca,
    "meter": Medidor,
    "nav": Navegacao,
    "strong": Negrito,
    "object": Objeto,
    "option": Opcao,
    "p": Paragrafo,
    "pre": Preformatado,
    "main": Principal,
    "progress": Progresso,
    "br": QuebraLinha,
    "wbr": QuebraLinhaOportuna,
    "link": Recurso,
    "s": Riscado,
    "script": Script,
    "section": Secao,
    "select": Selecao,
    "noscript": SemScript,
    "sup": Sobrescrito,
    "u": Sublinhado,
    "sub": Subscrito,
    "summary": Sumario,
    "table": Tabela,
    "kbd": Teclado,
    "time": Tempo,
    "dt": Termo,
    "small": TextoPequeno,
    "h1": Titulo1,
    "h2": Titulo2,
    "h3": Titulo3,
    "h4": Titulo4,
    "h5": Titulo5,
    "h6": Titulo6,
    "var": Variavel,
}
