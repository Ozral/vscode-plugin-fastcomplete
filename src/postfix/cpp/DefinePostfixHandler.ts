import BasePostfixHandler from "../../base/BasePostfixHandler";
import { Return } from "../../base/decorator/Return";
import { Target } from "../../base/decorator/Target";
import { PostfixHandler } from "../../base/decorator/PostfixHandler";

@PostfixHandler(
  { language: "cpp", label: "define" },
  { language: "c", label: "define" }
)
class DefinePostfixHandler4Cpp extends BasePostfixHandler {
  @Target.Slice({ start: " " })
  @Return.Replace()
  handleLineText(replacement: string, data) {
    data.startIndex++;
    return `#define ${replacement.trim()} `;
  }
}
