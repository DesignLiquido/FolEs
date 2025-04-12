import { Scale } from "../../valores/metodos/css/scale";
import { Opacity } from "../../valores/metodos/css/opacity";
import { Perspective } from "../../valores/metodos/css/perspective";
import { Rotate } from "../../valores/metodos/css/rotate";
import { Translate } from "../../valores/metodos/css/translate";

export const DicionarioSuplementarMetodos: { [nomeCss: string]: any } = {
    opacity: Opacity,
    perspective: Perspective,
    rotate: Rotate,
    scale: Scale,
    translate: Translate,
};
