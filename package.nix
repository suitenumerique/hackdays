{
  stdenv,
  lib,
  fetchYarnDeps,
  nodejs,
  yarn,
  fixup-yarn-lock,
}:

let
  inherit (lib.fileset) toSource unions;
in

stdenv.mkDerivation {
  pname = "hackdays";
  version = "0.1";

  offlineCache = fetchYarnDeps {
    yarnLock = ./yarn.lock;
    hash = "sha256-10b8l45zXYZRiNwvwuG8q/8IrupV3AEJxliwCpgkMeE=";
  };

  src = toSource {
    root = ./.;

    fileset = unions [
      ./public
      ./src
      ./eslint.config.mjs
      ./favicon.ico
      ./next.config.ts
      ./package.json
      ./postcss.config.js
      ./tailwind.config.ts
      ./tsconfig.json
      ./yarn.lock
    ];
  };

  nativeBuildInputs = [
    fixup-yarn-lock
    nodejs
    yarn
  ];

  configurePhase = ''
    runHook preConfigure

    export HOME=$(pwd)

    fixup-yarn-lock yarn.lock
    yarn config --offline set yarn-offline-mirror $offlineCache
    yarn install --offline --frozen-lockfile --no-progress --non-interactive

    patchShebangs node_modules

    runHook postConfigure
  '';

  buildPhase = ''
    runHook preBuild

    yarn build

    runHook postBuild
  '';

  installPhase = ''
    mv out $out
  '';
}
