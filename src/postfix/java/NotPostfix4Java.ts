import * as vsc from "vscode";
import { Position } from "vscode";
import DocumentUtil from "../../util/DocumentUtil";
import JavaPostfix from "./JavaPostfix";
import Register from "../../util/Register";

class NotPostfix4Java extends JavaPostfix {
  constructor() {
    super("not", ".");
  }

  handleLineText(lineText: string): string | vsc.SnippetString | null {
    // 截取
    let startIndex = lineText.lastIndexOf(" ");
    let endIndex = lineText.lastIndexOf(".");
    // 需要替换的文本
    let replacement = lineText.substring(startIndex + 1, endIndex);
    this.args.startIndex = startIndex;
    return `!${replacement}`;
  }

  handleCompleteItem(item: vsc.CompletionItem) {
    let position: Position = this.args.position;
    item.additionalTextEdits = [
      vsc.TextEdit.delete(
        new vsc.Range(
          new Position(position.line, this.args.startIndex),
          position
        )
      ),
    ];
  }
}

Register.registerPostfix(new NotPostfix4Java());
