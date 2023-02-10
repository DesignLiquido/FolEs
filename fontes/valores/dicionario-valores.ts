import { Hex } from "./metodos/hex";
import { Hsl } from "./metodos/hsl";
import { Hsla } from "./metodos/hsla";
import { Rgb } from "./metodos/rgb";
import { Rgba } from "./metodos/rgba";

export const DicionarioValores: { [nomeFolEs: string]: any } = {
    "rgb": Rgb,
    "rgba": Rgba,
    "hsl": Hsl,
    "hsla": Hsla,
    "hex": Hex,
}
