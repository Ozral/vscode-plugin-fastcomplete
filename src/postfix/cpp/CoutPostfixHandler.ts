import { SnippetString } from "vscode";
import BasePostfixHandler from "../../base/BasePostfixHandler";
import { Return } from "../../base/decorator/Return";
import { Target } from "../../base/decorator/Target";
import { PostfixHandler } from "../../base/decorator/PostfixHandler";

@PostfixHandler({ language: "cpp", label: "cout" })
class CoutPostfixHandler4Cpp extends BasePostfixHandler {
  @Target.Slice({ end: "." })
  @Return.Replace()
  handleLineText(replacement: string, data: {}) {
    return new SnippetString(`std::cout << ${replacement} << std::endl;`);
  }
}
