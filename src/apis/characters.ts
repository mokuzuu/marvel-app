import { baseUrl } from "./index";
import env from "env.json";
import CryptoJS from "crypto-js";
export const getCharacters = (offset: Number) => {
  const ts = new Date().getTime().toString();
  const hash = CryptoJS.MD5(
    ts + env.marvel.privateKey + env.marvel.publicKey
  ).toString();
  const searchParams = new URLSearchParams({
    apikey: env.marvel.publicKey,
    hash: hash,
    ts: ts
  });
  if (typeof offset === "number") {
    searchParams.set("offset", offset.toString());
  }

  const params: RequestInit = {
    method: "GET"
  };
  return fetch(
    baseUrl + "v1/public/characters?" + searchParams.toString(),
    params
  )
    .then(res => {
      return res.json();
    })
    .then(v => v)
    .catch(err => err);
};

export const getCharacterById = (id: string) => {
  const ts = new Date().getTime().toString();
  const hash = CryptoJS.MD5(
    ts + env.marvel.privateKey + env.marvel.publicKey
  ).toString();
  const searchParams = new URLSearchParams({
    apikey: env.marvel.publicKey,
    hash: hash,
    ts: ts
  });

  const params: RequestInit = {
    method: "GET"
  };
  return fetch(
    baseUrl + `v1/public/characters/${id}?` + searchParams.toString(),
    params
  )
    .then(res => {
      return res.json();
    })
    .then(v => v)
    .catch(err => err);
};
