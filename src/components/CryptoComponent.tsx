import { Crypto } from "../types/Crypto";
export type AppProps = {
    crypto: Crypto
};

export default function CryptoComponent({ crypto }: AppProps) {
    return <p>{ crypto.name }</p>
}