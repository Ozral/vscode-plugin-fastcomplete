import { SnippetString } from "vscode";
import BasePostfixHandler from "../../base/BasePostfixHandler";
import { PostfixHandler } from "../../base/ioc/PostfixHandler";
import LineTextHandleResult from "../../base/LinetextHandleResult";

@PostfixHandler({ language: "java", label: "souf" })
class SoufPostfixHandler4J extends BasePostfixHandler {
  handleLineText(
    lineText: string,
    firstNonWhitespaceCharacterIndex: number
  ): LineTextHandleResult {
    let endIndex = lineText.lastIndexOf(".");
    let replacement = lineText
      .substring(firstNonWhitespaceCharacterIndex, endIndex)
      .trim()
      .trimEnd();
    const newText = `System.out.printf("$1",${replacement});`;
    return {
      text: new SnippetString(newText),
      deleteText: {
        startIndex: firstNonWhitespaceCharacterIndex,
        endIndex: endIndex + 1,
      },
    };
  }
}