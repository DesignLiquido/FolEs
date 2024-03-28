import { Calcular } from "./metodos/calcular";
import { Contraste } from "./metodos/contraste";
import { CurvaCubica } from "./metodos/curva-cubica";
import { EncaixarConteudo } from "./metodos/encaixar-conteudo";
import { GradienteLinear } from "./metodos/gradiente-linear";
import { HexadecimalCor } from "./metodos/hexadecimal-cor";
import { Hsl } from "./metodos/hsl";
import { Hsla } from "./metodos/hsla";
import { Limitar } from "./metodos/limitar";
import { Linear } from "./metodos/linear";
import { MinMax } from "./metodos/minmax";
import { Rgb } from "./metodos/rgb";
import { Rgba } from "./metodos/rgba";
import { Passos } from "./metodos/passos";
import { Url } from "./metodos/url";

export const DicionarioValores: { [nomeFolEs: string]: any } = {
    "calcular": Calcular,
    "contraste": Contraste,
    "curva-cubica": CurvaCubica,
    "curva-cúbica": CurvaCubica,
    "encaixar-conteudo": EncaixarConteudo,
    "encaixar-conteúdo": EncaixarConteudo,
    "gradiente-linear": GradienteLinear,
    "hsl": Hsl,
    "hsla": Hsla,
    "hex": HexadecimalCor,
    "limitar": Limitar,
    "linear": Linear,
    "minmax": MinMax,
    "passos": Passos,
    "rgb": Rgb,
    "rgba": Rgba,
    "url": Url,
}
