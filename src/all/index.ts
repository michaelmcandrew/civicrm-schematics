import { Rule, chain, schematic } from "@angular-devkit/schematics";

export default function all(): Rule {
  return chain([schematic("init", {}), schematic("entity", { all: true })]);
}
