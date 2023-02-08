import { Hex } from "./metodos/hex";
import { Hsl } from "./metodos/hsl";
import { Rgb } from "./metodos/rgb";
import { Rgba } from "./metodos/rgba";

export const DicionarioValores: { [nomeFolEs: string]: any } = {
    "rgb": Rgb,
    "rgba": Rgba,
    "hsl": Hsl,
    // "hex": Hex,
}
