/// <reference types="node" />
export declare const ETH: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ETHERMINT: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ethToEthermint: (ethAddress: string) => string;
export declare const ethermintToEth: (ethermintAddress: string) => string;
export declare const ECH: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ethToEvmos: (ethAddress: string) => string;
export declare const echelonToEth: (echelonAddress: string) => string;
