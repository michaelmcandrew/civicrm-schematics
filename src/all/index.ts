import { Rule, chain, schematic } from "@angular-devkit/schematics";

export default function all(options: any): Rule {
  return chain([schematic("init", options), schematic("entity", { all: true })]);
}
