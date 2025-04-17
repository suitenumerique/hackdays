{
  sources ? import ./npins,
  pkgs ? import sources.nixpkgs { },
}:

let
  inherit (pkgs.lib.filesets) toSource unions;
in

{
  devShell = pkgs.mkShell {
    name = "hackdays.dev";

    packages = with pkgs; [
      nodejs
      yarn
    ];
  };

  package = pkgs.callPackage ./package.nix { };
}
