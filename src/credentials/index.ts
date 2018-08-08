import {
  Rule,
  SchematicContext,
  Tree,
  url,
  apply,
  move,
  template,
  mergeWith,
} from "@angular-devkit/schematics";

import { addToGitIgnore } from '../utility/gitignore'

export function credentials(options: any): Rule {
  return (host: Tree, _context: SchematicContext) => {
    addToGitIgnore(host, 'src/civicrm-credentials.ts')
    return mergeWith(
      apply(url("./files"), [
        template({...options}),
        move('src'),
      ])
    );
  };
}
