import { items } from "../extension";
import { CompletionItemProvider, languages } from "vscode";
import BasePostfixProvider from "../base/BasePostfixProvider";
import { assert } from "node:console";

/**
 * 注册器
 */
export default class Register {
  private constructor() {}
  /**
   * 注册分发器
   */
  public static registerPostfixDispatcher(
    postfixDispatcher: BasePostfixProvider
  ) {
    if (postfixDispatcher.language === null) {
      throw Error(`register failed! reason: the language is null!`);
    }
    let postfixDisposable = languages.registerCompletionItemProvider(
      postfixDispatcher.language,
      postfixDispatcher,
      ...postfixDispatcher.triggerCharacters
    );
    items.push(postfixDisposable);
  }
}