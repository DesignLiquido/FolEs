import { Borrar } from "./metodos/borrar";
import { Brilho } from "./metodos/brilho";
import { Calcular } from "./metodos/calcular";
import { Contraste } from "./metodos/contraste";
import { CurvaCubica } from "./metodos/curva-cubica";
import { EncaixarConteudo } from "./metodos/encaixar-conteudo";
import { EscalaCinza } from "./metodos/escala-cinza";
import { GradienteLinear } from "./metodos/gradiente-linear";
import { HexadecimalCor } from "./metodos/hexadecimal-cor";
import { Hsl } from "./metodos/hsl";
import { Hsla } from "./metodos/hsla";
import { Inclinar } from "./metodos/inclinar";
import { InclinarHorizontal } from "./metodos/inclinar-horizontal";
import { InclinarVertical } from "./metodos/inclinar-vertical";
import { Inverter } from "./metodos/inverter";
import { Limitar } from "./metodos/limitar";
import { Linear } from "./metodos/linear";
import { MinMax } from "./metodos/minmax";
import { Opacar } from "./metodos/opacar";
import { Passos } from "./metodos/passos";
import { Perspectivar } from "./metodos/perspectivar";
import { ProjetarSombra } from "./metodos/projetar-sombra";
import { Raio } from "./metodos/raio";
import { Rgb } from "./metodos/rgb";
import { Rgba } from "./metodos/rgba";
import { Rotacionar } from "./metodos/rotacionar";
import { RotacionarEixoZ } from "./metodos/rotacionar-eixo-z";
import { RotacionarHorizontal } from "./metodos/rotacionar-horizontal";
import { RotacionarMatiz } from "./metodos/rotacionar-matiz";
import { RotacionarVertical } from "./metodos/rotacionar-vertical";
import { Saturar } from "./metodos/saturar";
import { Sepia } from "./metodos/sepia";
import { Url } from "./metodos/url";

export const DicionarioValores: { [nomeFolEs: string]: any } = {
    "borrar": Borrar,
    "brilho": Brilho,
    "calcular": Calcular,
    "contraste": Contraste,
    "curva-cubica": CurvaCubica,
    "curva-cúbica": CurvaCubica,
    "encaixar-conteudo": EncaixarConteudo,
    "encaixar-conteúdo": EncaixarConteudo,
    "escala-cinza": EscalaCinza,
    "gradiente-linear": GradienteLinear,
    "hsl": Hsl,
    "hsla": Hsla,
    "hex": HexadecimalCor,
    "inclinar": Inclinar,
    "inclinar-horizontal": InclinarHorizontal,
    "inclinar-vertical": InclinarVertical,
    "inverter": Inverter,
    "limitar": Limitar,
    "linear": Linear,
    "minmax": MinMax,
    "opacar": Opacar,
    "passos": Passos,
    "perspectivar": Perspectivar,
    "projetar-sombra": ProjetarSombra,
    "raio": Raio,
    "rgb": Rgb,
    "rgba": Rgba,
    "rotacionar": Rotacionar,
    "rotacionar-eixo-z": RotacionarEixoZ,
    "rotacionar-horizontal": RotacionarHorizontal,
    "rotacionar-matiz": RotacionarMatiz,
    "rotacionar-vertical": RotacionarVertical,
    "saturar": Saturar,
    "sepia": Sepia,
    "sépia": Sepia,
    "url": Url,
}
