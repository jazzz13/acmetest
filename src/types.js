// @flow

import type {$Request, $Response, NextFunction as _NextFunction, $Application} from "express";
import type Logger from './logger/index'

export type Response = $Response
export type NextFunction = _NextFunction
export type Application = $Application

export type Request = {
    logger: Logger,
    body: any
} & $Request

