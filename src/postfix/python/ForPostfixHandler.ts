import { SnippetString } from "vscode";
import BasePostfixHandler from "../../base/BasePostfixHandler";
import { PostfixHandler } from "../../base/ioc/PostfixHandler";
import LinetextHandleResult from "../../base/LinetextHandleResult";
import StringUtil from "../../util/StringUtil";
import { indent } from "../../util/DocumentUtil";

@PostfixHandler({ language: "python", label: "for" })
class ForPostfixHandler4Py extends BasePostfixHandler {
  handleLineText(
    lineText: string,
    firstNonWhiteSpaceIndex: number
  ): LinetextHandleResult | null {
    let endIndex = lineText.lastIndexOf(".");
    const replacement = lineText
      .substring(firstNonWhiteSpaceIndex, endIndex)
      .trimEnd();
    let newText;
    let documentation;
    let indentChars = indent();
    if (StringUtil.isInt(replacement)) {
      newText = `for \${1:i} in range(${replacement}):\n${indentChars}`;
      documentation = `for \${1:i} in range(${replacement}):\n${indentChars}`;
    } else {
      newText = `for \${1:i} in ${replacement}:\n${indentChars}`;
      documentation = `for \${1:i} in ${replacement}:\n${indentChars}`;
    }
    return {
      text: new SnippetString(newText),
      deleteText: {
        startIndex: firstNonWhiteSpaceIndex,
        endIndex: endIndex + 1,
      },
    };
  }
}