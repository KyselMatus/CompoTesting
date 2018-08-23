# Compotesting

Training project for the purposes of analysing and choosing proper components to be used in UniFe project.

## Installing

To install all required packages run
```
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Troubleshooting

If you encounter this error:
```
ERROR Error: Uncaught (in promise): Error: StaticInjectorError(...)[BsDropdownDirective -> ComponentLoaderFactory]:
StaticInjectorError(Platform: core)[BsDropdownDirective -> ComponentLoaderFactory]:
NullInjectorError: No provider for ComponentLoaderFactory! Error: StaticInjectorError(...)[BsDropdownDirective ->
ComponentLoaderFactory]: StaticInjectorError(Platform: core)[BsDropdownDirective -> ComponentLoaderFactory]:
```
fix it by adding `.forRoot()` after `NgxIntlTelInputModule.decorators.args.imports.BsDropdownModule` in
```
node_modules/ngx-intl-tel-input/index.js
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
