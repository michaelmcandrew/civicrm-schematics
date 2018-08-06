import {
  Rule,
  SchematicContext,
  Tree,
  chain,
  schematic,
  noop
} from "@angular-devkit/schematics";
import { getSchema } from '../utility/schema'
export function entity(options: any): Rule {
  if (options.all) {
    return (_tree: Tree, _context: SchematicContext) => {
      const schema = getSchema()
      const rules: Rule[] = [];
      schema.entities.forEach(entity => rules.push(generate({ name: entity.name })))
      return chain(rules);
    };
  } else if (options.name) {
    return (_tree: Tree, _context: SchematicContext) => {
      return generate(options);
    };
  } else {
    return noop();
  }
}

function generate(options: any) {
  return chain([
    schematic("model", options),
    schematic("service", options),
    schematic("component-detail", options),
    schematic("component-list", options)
  ]);
}
