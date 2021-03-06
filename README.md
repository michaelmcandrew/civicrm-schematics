# Flow: a CiviCRM user interface built with Angular and Material Design

This repository generates a user interface for your CiviCRM site using Angular and Material design. It is a work in progress.

## Requirements

- [Angular CLI](https://cli.angular.io/) (`npm install -g @angular/cli`)
- [Angular schematics](https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2) (`npm install -g @angular-devkit/schematics-cli`)
- [ebb](https://packagist.org/packages/michaelmcandrew/ebb) (`composer global require michaelmcandrew/ebb`)

## Quick start

1. Create a new angular app

```bash
$ ng new flow
```

2. Add a schema that represents your CiviCRM site to the root of the app

```bash
$ cd flow
$ ebb generate "https://example.org/sites/all/modules/civicrm/extern/rest.php?key=xxx&api_key=xxx" > civicrm-schema.json
```

3. Generate the user interface from the schema

```bash
$ schematics civicrm-schematics:credentials --apiUrl="http://dmaster.buildkit:8080/sites/all/modules/civicrm/extern/rest.php?key=xxx&api_key=xxx"
$ schematics civicrm-schematics:all
```

4. Run a development server at http://localhost:4200

```bash
$ ng serve
```

## Development status

Under development and not ready for prime time. Contributions welcome!
