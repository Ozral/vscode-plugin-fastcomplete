import { SnippetString } from "vscode";
import BasePostfixHandler from "../../base/BasePostfixHandler";
import { PostfixHandler } from "../../base/ioc/decorator/PostfixHandler";
import { Target } from "../../base/decorator/Target";
import { Return } from "../../base/decorator/Return";

@PostfixHandler({ language: "markdown", label: "codeblock" })
class CodeBlockPostfixHandler extends BasePostfixHandler {
  private static readonly LANGS = [
    "1c",
    "abnf",
    "accesslog",
    "actionscript",
    "ada",
    "apache",
    "applescript",
    "arduino",
    "armasm",
    "asciidoc",
    "aspectj",
    "autohotkey",
    "autoit",
    "avrasm",
    "awk",
    "axapta",
    "bash",
    "basic",
    "bnf",
    "brainfuck",
    "cal",
    "capnproto",
    "ceylon",
    "clean",
    "clojure",
    "clojure-repl",
    "cmake",
    "coffeescript",
    "coq",
    "cos",
    "cpp",
    "crmsh",
    "crystal",
    "cs",
    "c#",
    "csharp",
    "csp",
    "css",
    "d",
    "dart",
    "delphi",
    "diff",
    "django",
    "dns",
    "dockerfile",
    "dos",
    "dsconfig",
    "dts",
    "dust",
    "ebnf",
    "elixir",
    "elm",
    "erb",
    "erlang",
    "erlang-repl",
    "excel",
    "fix",
    "flix",
    "fortran",
    "fsharp",
    "gams",
    "gauss",
    "gcode",
    "gherkin",
    "glsl",
    "go",
    "golang",
    "golo",
    "gradle",
    "groovy",
    "haml",
    "handlebars",
    "haskell",
    "haxe",
    "hsp",
    "htmlbars",
    "http",
    "hy",
    "inform7",
    "ini",
    "irpf90",
    "java",
    "javascript",
    "js",
    "json",
    "julia",
    "kotlin",
    "lasso",
    "ldif",
    "leaf",
    "less",
    "lisp",
    "livecodeserver",
    "livescript",
    "llvm",
    "lsl",
    "lua",
    "makefile",
    "markdown",
    "mathematica",
    "matlab",
    "maxima",
    "mel",
    "mercury",
    "mipsasm",
    "mizar",
    "mojolicious",
    "monkey",
    "moonscript",
    "n1ql",
    "nginx",
    "nimrod",
    "nix",
    "nsis",
    "objectivec",
    "ocaml",
    "openscad",
    "oxygene",
    "parser3",
    "perl",
    "pf",
    "php",
    "pony",
    "powershell",
    "processing",
    "profile",
    "prolog",
    "protobuf",
    "puppet",
    "purebasic",
    "py",
    "python",
    "q",
    "qml",
    "r",
    "rib",
    "roboconf",
    "rsl",
    "ruby",
    "ruleslanguage",
    "rust",
    "scala",
    "scheme",
    "scilab",
    "scss",
    "smali",
    "smalltalk",
    "sml",
    "sqf",
    "sql",
    "stan",
    "stata",
    "step21",
    "stylus",
    "subunit",
    "swift",
    "taggerscript",
    "tap",
    "tcl",
    "tex",
    "toml",
    "thrift",
    "tp",
    "twig",
    "ts",
    "typescript",
    "vala",
    "vbnet",
    "vbscript",
    "vbscript-html",
    "verilog",
    "vhdl",
    "vim",
    "x86asm",
    "xl",
    "xml",
    "xquery",
    "yml",
    "yaml",
    "zephir",
  ];
  private static readonly SET = new Set<String>(CodeBlockPostfixHandler.LANGS);
  @Target.Interval({ start: " " })
  @Return.DeleteText({})
  handleLineText(replacement: string, datas: {}) {
    // 如果 datas["startIndex"]原本 == -1
    if (datas["startIndex"] === -1) {
      datas["startIndex"] = datas["firstNotWhiteSpaceIndex"];
    } else {
      datas["startIndex"]++;
      replacement = replacement.substring(1);
    }
    if (CodeBlockPostfixHandler.SET.has(replacement)) {
      return new SnippetString("```" + replacement + "\n${1}\n```");
    }
    return null;
  }
}
