import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type SocialsProps = {
    color: string;
}

export interface ISocials {
    name: string;
    logo: StaticImport;
}