import { Borrar } from "./metodos/foles/borrar";
import { Brilho } from "./metodos/foles/brilho";
import { Calcular } from "./metodos/foles/calcular";
import { Contraste } from "./metodos/foles/contraste";
import { CurvaCubica } from "./metodos/foles/curva-cubica";
import { EncaixarConteudo } from "./metodos/foles/encaixar-conteudo";
import { EscalaCinza } from "./metodos/foles/escala-cinza";
import { Escalamento } from "./metodos/foles/escalamento";
import { Escalamento3d } from "./metodos/foles/escalamento-3d";
import { EscalamentoEixoZ } from "./metodos/foles/escalamento-eixo-z";
import { EscalamentoHorizontal } from "./metodos/foles/escalamento-horizontal";
import { EscalamentoVertical } from "./metodos/foles/escalamento-vertical";
import { GradienteLinear } from "./metodos/foles/gradiente-linear";
import { HexadecimalCor } from "./metodos/foles/hexadecimal-cor";
import { Hsl } from "./metodos/foles/hsl";
import { Hsla } from "./metodos/foles/hsla";
import { Inclinar } from "./metodos/foles/inclinar";
import { InclinarHorizontal } from "./metodos/foles/inclinar-horizontal";
import { InclinarVertical } from "./metodos/foles/inclinar-vertical";
import { Inverter } from "./metodos/foles/inverter";
import { Limitar } from "./metodos/foles/limitar";
import { Linear } from "./metodos/foles/linear";
import { MinMax } from "./metodos/foles/minmax";
import { Opacar } from "./metodos/foles/opacar";
import { Passos } from "./metodos/foles/passos";
import { Perspectivar } from "./metodos/foles/perspectivar";
import { ProjetarSombra } from "./metodos/foles/projetar-sombra";
import { Raio } from "./metodos/foles/raio";
import { Rgb } from "./metodos/foles/rgb";
import { Rgba } from "./metodos/foles/rgba";
import { Rotacionar } from "./metodos/foles/rotacionar";
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

export const DicionarioValores: { [nomeFolEs: string]: any } = {
    borrar: Borrar,
    brilho: Brilho,
    calcular: Calcular,
    contraste: Contraste,
    "curva-cubica": CurvaCubica,
    "curva-cúbica": CurvaCubica,
    "encaixar-conteudo": EncaixarConteudo,
    "encaixar-conteúdo": EncaixarConteudo,
    "escala-cinza": EscalaCinza,
    escalamento: Escalamento,
    "escalamento-3d": Escalamento3d,
    "escalamento-eixo-z": EscalamentoEixoZ,
    "escalamento-horizontal": EscalamentoHorizontal,
    "escalamento-vertical": EscalamentoVertical,
    "gradiente-linear": GradienteLinear,
    hsl: Hsl,
    hsla: Hsla,
    hex: HexadecimalCor,
    inclinar: Inclinar,
    "inclinar-horizontal": InclinarHorizontal,
    "inclinar-vertical": InclinarVertical,
    inverter: Inverter,
    limitar: Limitar,
    linear: Linear,
    minmax: MinMax,
    opacar: Opacar,
    passos: Passos,
    perspectivar: Perspectivar,
    "projetar-sombra": ProjetarSombra,
    raio: Raio,
    rgb: Rgb,
    rgba: Rgba,
    rotacionar: Rotacionar,
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
    url: Url,
};
