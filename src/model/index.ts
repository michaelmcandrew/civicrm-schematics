import {
  Rule,
  SchematicContext,
  Tree,
  mergeWith,
  url,
  apply,
  template,
  move
} from "@angular-devkit/schematics";
import * as strings from "@angular-devkit/core/src/utils/strings";
import { getEntity } from '../utility/entity'

export function model(options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const entity = getEntity(options.name)
    return mergeWith(
      apply(url("./files"), [
        template({...strings, ...options, entity: entity}),
        move("src/app/entities")
      ])
    );
  };
}
