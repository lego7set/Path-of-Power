/*eslint-disable */

import {
  AES,
  enc,
  lib,
  SHA256,
  MD5,
  RIPEMD160,
  SHA512,
  SHA1,
  SHA3,
} from "crypto-js";

function createWordArray(str: string): lib.WordArray | void {
  // @ts-ignore
  return lib.WordArray.create(str);
}

export function encodeBase64(str: string): string {
  return enc.Base64.stringify(enc.Utf8.parse(str));
}

export function decodeBase64(str: string): string {
  return enc.Base64.parse(str).toString(enc.Utf8);
}

export enum HashMethods {
  SHA1 = "SHA1",
  SHA3 = "SHA3",
  SHA256 = "SHA256",
  SHA512 = "SHA512",
  RIPEMD160 = "RIPEMD160",
  MD5 = "MD5",
}

export function hash(str: string, method?: HashMethods): string {
  switch (method) {
    case HashMethods.SHA1:
      return SHA1(str).toString(enc.Hex);
    case HashMethods.SHA3:
      return SHA3(str).toString(enc.Hex);
    case HashMethods.SHA256:
      return SHA256(str).toString(enc.Hex);
    case HashMethods.SHA512:
      return SHA512(str).toString(enc.Hex);
    case HashMethods.RIPEMD160:
      return RIPEMD160(str).toString(enc.Hex);
    case HashMethods.MD5:
      return MD5(str).toString(enc.Hex);
  }

  return "";
}

/*export function encodeBase64(str: string): string {
  const encodedString = btoa(encodeURIComponent(str));
  return encodedString;
}

export function decodeBase64(str: string): string {
  const decodedString = decodeURIComponent(atob(str));
  return decodedString;
}*/
