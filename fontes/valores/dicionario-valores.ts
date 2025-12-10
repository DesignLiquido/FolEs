import { Anotacao } from "./metodos/foles/anotacao";
import { Borrar } from "./metodos/foles/borrar";
import { Brilho } from "./metodos/foles/brilho";
import { Calcular } from "./metodos/foles/calcular";
import { Circular } from "./metodos/foles/circular";
import { ConjuntoEstilos } from "./metodos/foles/conjunto-estilos";
import { Contador } from "./metodos/foles/contador";
import { Contraste } from "./metodos/foles/contraste";
import { CurvaCubica } from "./metodos/foles/curva-cubica";
import { DefinirCaminho } from "./metodos/foles/definir-caminho";
import { DefinirImagem } from "./metodos/foles/definir-imagem";
import { Elemento } from "./metodos/foles/elemento";
import { Elipse } from "./metodos/foles/elipse";
import { EncaixarConteudo } from "./metodos/foles/encaixar-conteudo";
import { EscalaCinza } from "./metodos/foles/escala-cinza";
import { Escalamento } from "./metodos/foles/escalamento";
import { Escalamento3d } from "./metodos/foles/escalamento-3d";
import { EscalamentoEixoZ } from "./metodos/foles/escalamento-eixo-z";
import { EscalamentoHorizontal } from "./metodos/foles/escalamento-horizontal";
import { EscalamentoVertical } from "./metodos/foles/escalamento-vertical";
import { Espirrar } from "./metodos/foles/espirrar";
import { Estilistico } from "./metodos/foles/estilistico";
import { GradienteLinear } from "./metodos/foles/gradiente-linear";
import { GradienteRadial } from "./metodos/foles/gradiente-radial";
import { HexadecimalCor } from "./metodos/foles/hexadecimal-cor";
import { Hsl } from "./metodos/foles/hsl";
import { Hsla } from "./metodos/foles/hsla";
import { Inclinar } from "./metodos/foles/inclinar";
import { InclinarHorizontal } from "./metodos/foles/inclinar-horizontal";
import { InclinarVertical } from "./metodos/foles/inclinar-vertical";
import { Inserir } from "./metodos/foles/inserir";
import { Inverter } from "./metodos/foles/inverter";
import { Limitar } from "./metodos/foles/limitar";
import { Linear } from "./metodos/foles/linear";
import { MinMax } from "./metodos/foles/minmax";
import { Opacar } from "./metodos/foles/opacar";
import { Ornamentos } from "./metodos/foles/ornamentos";
import { Passos } from "./metodos/foles/passos";
import { Perspectivar } from "./metodos/foles/perspectivar";
import { Pintura } from "./metodos/foles/pintura";
import { Poligono } from "./metodos/foles/poligono";
import { ProjetarSombra } from "./metodos/foles/projetar-sombra";
import { Raio } from "./metodos/foles/raio";
import { RepetirGradienteConico } from "./metodos/foles/repetir-gradiente-conico";
import { RepetirGradienteLinear } from "./metodos/foles/repetir-gradiente-linear";
import { RepetirGradienteRadial } from "./metodos/foles/repetir-gradiente-radial";
import { Retangulo } from "./metodos/foles/retangulo";
import { Rgb } from "./metodos/foles/rgb";
import { Rgba } from "./metodos/foles/rgba";
import { Rotacionar } from "./metodos/foles/rotacionar";
import { Rotacionar3d } from "./metodos/foles/rotacionar-3d";
import { RotacionarEixoZ } from "./metodos/foles/rotacionar-eixo-z";
import { RotacionarHorizontal } from "./metodos/foles/rotacionar-horizontal";
import { RotacionarMatiz } from "./metodos/foles/rotacionar-matiz";
import { RotacionarVertical } from "./metodos/foles/rotacionar-vertical";
import { Saturar } from "./metodos/foles/saturar";
import { Sepia } from "./metodos/foles/sepia";
import { Translacao } from "./metodos/foles/translacao";
import { Translacao3d } from "./metodos/foles/translacao-3d";
import { TranslacaoEixoZ } from "./metodos/foles/translacao-eixo-z";
import { TranslacaoHorizontal } from "./metodos/foles/translacao-horizontal";
import { TranslacaoVertical } from "./metodos/foles/translacao-vertical";
import { Url } from "./metodos/foles/url";
import { VariarCaractere } from "./metodos/foles/variar-caractere";
import { Xywh } from "./metodos/foles/xywh";

export const DicionarioValores: { [nomeFolEs: string]: any } = {
    anotacao: Anotacao,
    anotação: Anotacao,
    borrar: Borrar,
    brilho: Brilho,
    calcular: Calcular,
    circular: Circular,
    "conjunto-estilos": ConjuntoEstilos,
    contraste: Contraste,
    contador: Contador,
    "curva-cubica": CurvaCubica,
    "curva-cúbica": CurvaCubica,
    "definir-caminho": DefinirCaminho,
    "definir-imagem": DefinirImagem,
    elemento: Elemento,
    elipse: Elipse,
    "encaixar-conteudo": EncaixarConteudo,
    "encaixar-conteúdo": EncaixarConteudo,
    "escala-cinza": EscalaCinza,
    escalamento: Escalamento,
    "escalamento-3d": Escalamento3d,
    "escalamento-eixo-z": EscalamentoEixoZ,
    "escalamento-horizontal": EscalamentoHorizontal,
    "escalamento-vertical": EscalamentoVertical,
    "espirrar": Espirrar,
    "estilistico": Estilistico,
    "estilístico": Estilistico,
    "gradiente-linear": GradienteLinear,
    "gradiente-radial": GradienteRadial,
    hsl: Hsl,
    hsla: Hsla,
    hex: HexadecimalCor,
    inclinar: Inclinar,
    "inclinar-horizontal": InclinarHorizontal,
    "inclinar-vertical": InclinarVertical,
    inserir: Inserir,
    inverter: Inverter,
    limitar: Limitar,
    linear: Linear,
    minmax: MinMax,
    opacar: Opacar,
    ornamentos: Ornamentos,
    passos: Passos,
    perspectivar: Perspectivar,
    pintura: Pintura,
    poligono: Poligono,
    polígono: Poligono,
    "projetar-sombra": ProjetarSombra,
    raio: Raio,
    "repetir-gradiente-conico": RepetirGradienteConico,
    "repetir-gradiente-cônico": RepetirGradienteConico,
    "repetir-gradiente-linear": RepetirGradienteLinear,
    "repetir-gradiente-radial": RepetirGradienteRadial,
    retangulo: Retangulo,
    retângulo: Retangulo,
    rgb: Rgb,
    rgba: Rgba,
    rotacionar: Rotacionar,
    "rotacionar-3d": Rotacionar3d,
    "rotacionar-eixo-z": RotacionarEixoZ,
    "rotacionar-horizontal": RotacionarHorizontal,
    "rotacionar-matiz": RotacionarMatiz,
    "rotacionar-vertical": RotacionarVertical,
    saturar: Saturar,
    sepia: Sepia,
    sépia: Sepia,
    translacao: Translacao,
    translação: Translacao,
    "translacao-3d": Translacao3d,
    "translação-3d": Translacao3d,
    "translacao-eixo-z": TranslacaoEixoZ,
    "translação-eixo-z": TranslacaoEixoZ,
    "translacao-horizontal": TranslacaoHorizontal,
    "translação-horizontal": TranslacaoHorizontal,
    "translacao-vertical": TranslacaoVertical,
    "translação-vertical": TranslacaoVertical,
    "variar-caractere": VariarCaractere,
    url: Url,
    xywh: Xywh,
};
