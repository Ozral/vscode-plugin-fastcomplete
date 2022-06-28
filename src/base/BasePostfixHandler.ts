import { CompletionItem, SnippetString } from "vscode";
import TargetHandleResult from "./TargetHandleResult";

/**
 * 后缀处理类
 * @description 该类关注后缀的处理逻辑, PostfixProvider 会按以下顺序依次调用方法,
 * initArgs()->handleLineText()->handleCompletionItem()
 * 这几个方法中都带有 args 参数,这个参数会被 Postfix 传入,代表了当前 Postfix 中的参数
 */
export default abstract class BasePostfixHandler {
  /**
   * 初始化参数
   * @param datas 参数
   */
  initArgs(datas: {}) {}

  /**
   * 处理行文本
   * @param lineText 行文本
   * @param data
   */
  abstract handleLineText(
    lineText: string,
    data: {}
  ): string | SnippetString | TargetHandleResult | null;

  /**
   * 处理补全项
   * @param item 补全项
   * @Param args 参数
   */
  handleCompletionItem(item: CompletionItem, datas: {}) {}
}
