import * as express from "express";
import { wrapRequestHandler } from "io-functions-commons/dist/src/utils/request_middleware";
import {
  IResponseErrorInternal,
  IResponseSuccessJson,
  ResponseErrorInternal
} from "italia-ts-commons/lib/responses";

interface IInfo {
  name: string;
  version: string;
}

type InfoHandler = () => Promise<
  IResponseSuccessJson<IInfo> | IResponseErrorInternal
>;

export function InfoHandler(): InfoHandler {
  return async () => ResponseErrorInternal("Unhandled error");
}

export function Info(): express.RequestHandler {
  const handler = InfoHandler();

  return wrapRequestHandler(handler);
}
