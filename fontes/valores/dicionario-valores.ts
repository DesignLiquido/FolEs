import { CubicBezier } from "./metodos/cubic-bezier";
import { FitContent } from "./metodos/fit-content";
import { Hex } from "./metodos/hex";
import { Hsl } from "./metodos/hsl";
import { Hsla } from "./metodos/hsla";
import { Linear } from "./metodos/linear";
import { MinMax } from "./metodos/minmax";
import { Rgb } from "./metodos/rgb";
import { Rgba } from "./metodos/rgba";
import { Steps } from "./metodos/steps";
import { Url } from "./metodos/url";

export const DicionarioValores: { [nomeFolEs: string]: any } = {
    "cubic-bezier": CubicBezier,
    "fit-content": FitContent,
    "hsl": Hsl,
    "hsla": Hsla,
    "hex": Hex,
    "linear": Linear,
    "minmax": MinMax,
    "rgb": Rgb,
    "rgba": Rgba,
    "steps": Steps,
    "url": Url,
}
