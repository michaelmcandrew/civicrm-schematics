import {
  Rule,
  SchematicContext,
  Tree,
  chain,
  url,
  mergeWith,
} from "@angular-devkit/schematics";
import {
  addPackageJsonDependency,
  NodeDependencyType
} from "@schematics/angular/utility/dependencies";
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";
import { latestVersions } from "@schematics/angular/utility/latest-versions";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function init(options: any): Rule {
  return chain([
    (host: Tree, context: SchematicContext) => {
      addPackageJsonDependency(host, {
        type: NodeDependencyType.Default,
        name: "@angular/material",
        version: latestVersions.Angular
      }); //TODO why does this report an update even if the package is already there?
      if(!options.skipPackageInstall){
        context.addTask(new NodePackageInstallTask());
      }
      return mergeWith(url("./files"));
    }
  ]);
}
