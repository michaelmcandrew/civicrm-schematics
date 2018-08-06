import * as fs from "fs";
import { Entity } from './entity'

export class Schema{
  entities: Entity[]
}

export function getSchema(): Schema{
  return JSON.parse(fs.readFileSync('civicrm-schema.json').toString("utf8"));
}
