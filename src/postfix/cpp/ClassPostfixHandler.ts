import { SnippetString } from "vscode";
import BasePostfixHandler from "../../base/BasePostfixHandler";
import { Return } from "../../base/decorator/Return";
import { Target } from "../../base/decorator/Target";
import { PostfixHandler } from "../../base/decorator/PostfixHandler";
import { indent } from "../../util/DocumentUtil";

@PostfixHandler({ language: "cpp", label: "class" })
class ClassPostfixHandler4Cpp extends BasePostfixHandler {
  @Target.Slice({ start: " " })
  @Return.Replace()
  handleLineText(replacement: string, datas: {}) {
    datas["startIndex"]++;
    return new SnippetString(
      `class ${replacement.trim()} {\n${indent()}$0\n};`
    );
  }
}
