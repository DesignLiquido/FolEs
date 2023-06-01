import { Abreviacao } from "./lmht/abreviacao";
import { Aparte } from "./lmht/aparte";
import { Area } from "./lmht/area";
import { AreaTexto } from "./lmht/area-texto";
import { Aspas } from "./lmht/aspas";
import { Artigo } from "./lmht/artigo";
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

export const DicionarioEstruturasLmht: { [nomeFolEs: string]: any } = {
    "abreviacao": Abreviacao,
    "abreviação": Abreviacao,
    "aparte": Aparte,
    "area-texto": AreaTexto,
    "área-texto": AreaTexto,
    "area": Area,
    "área": Area,
    "artigo": Artigo,
    "aspas": Aspas,
    "audio": Audio,
    "áudio": Audio,
    "botao": Botao,
    "botão": Botao,
    "cabeca": Cabeca,
    "cabeça": Cabeca,
    "cabeca-tabela": CabecaTabela,
    "cabeça-tabela": CabecaTabela,
    "campo": Campo,
    "campos": Campos,
    "canvas": Canvas,
    "celula": Celula,
    "célula": Celula,
    "citacao": Citacao,
    "citação": Citacao,
    "codigo": Codigo,
    "código": Codigo,
    "coluna": Coluna,
    "corpo": Corpo,
    "corpo-tabela": CorpoTabela,
    "definicao": Definicao,
    "definição": Definicao,
    "detalhes": Detalhes,
    "divisao": Divisao,
    "divisão": Divisao,
    "endereco": Endereco,
    "endereço": Endereco,
    "envelope-texto": EnvelopeTexto,
    "etiqueta": Etiqueta,
    "excluido": Excluido,
    "excluído": Excluido,
    "exemplo": Exemplo,
    "formulario": Formulario,
    "formulário": Formulario,
    "grupo-colunas": GrupoColunas,
    "grupo-opcoes": GrupoOpcoes,
    "grupo-opções": GrupoOpcoes,
    "imagem": Imagem,
    "invisivel": Invisivel,
    "invisível": Invisivel,
    "italico": Italico,
    "itálico": Italico,
    "item-lista": ItemLista,
    "ligacao": Ligacao,
    "ligação": Ligacao,
    "linha": Linha,
    "linha-horizontal": LinhaHorizontal,
    "lista-definicoes": ListaDefinicoes,
    "lista-definições": ListaDefinicoes,
    "lista-numerada": ListaNumerada,
    "lista-pesquisavel": ListaPesquisavel,
    "lista-pesquisável": ListaPesquisavel,
    "lista-simples": ListaSimples,
    "lmht": Lmht,
    "marca": Marca,
    "medidor": Medidor,
    "navegacao": Navegacao,
    "navegação": Navegacao,
    "negrito": Negrito,
    "objeto": Objeto,
    "opcao": Opcao,
    "opção": Opcao,
    "paragrafo": Paragrafo,
    "parágrafo": Paragrafo,
    "preformatado": Preformatado,
    "principal": Principal,
    "progresso": Progresso,
    "quebra-linha": QuebraLinha,
    "quebra-linha-oportuna": QuebraLinhaOportuna,
    "recurso": Recurso,
    "riscado": Riscado,
    "script": Script,
    "secao": Secao,
    "seção": Secao,
    "selecao": Selecao,
    "seleção": Selecao,
    "sem-script": SemScript,
    "sobrescrito": Sobrescrito,
    "sublinhado": Sublinhado,
    "subscrito": Subscrito,
    "sumario": Sumario,
    "sumário": Sumario,
    "tabela": Tabela,
    "teclado": Teclado,
    "tempo": Tempo,
    "termo": Termo,
    "texto-pequeno": TextoPequeno,
    "titulo1": Titulo1,
    "título1": Titulo1,
    "titulo2": Titulo2,
    "título2": Titulo2,
    "titulo3": Titulo3,
    "título3": Titulo3,
    "titulo4": Titulo4,
    "título4": Titulo4,
    "titulo5": Titulo5,
    "título5": Titulo5,
    "titulo6": Titulo6,
    "título6": Titulo6,
    "variavel": Variavel,
    "variável": Variavel,
}
