import {
  Tree,
} from "@angular-devkit/schematics";

export function addToGitIgnore(tree: Tree, line: string){
  const gitIgnore = tree.read('.gitignore')
  if(gitIgnore){
    const lines = gitIgnore.toString('utf8').split('\n')
    if(lines.indexOf(line) == -1){
      lines.push(line)
      tree.overwrite('.gitignore', lines.join('\n'))
    }
  }
}
