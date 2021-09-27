export interface TargetSlice {
  // 起始位置
  start?: string;
  // 结束为止
  end?: string;
}

export interface TargetRegex {
  regex: RegExp;
  // 起始位置
  start?: string;
  end?: string;
}

export namespace Target {
  /**
   * 在行文本中获取目标字符串
   * @param slice 默认为 {start=datas["firstNotWhiteSpaceIndex"],end=lineText.lastIndexOf(".")}, 即行文本
   * @returns
   */
  export function Slice(slice: TargetSlice): MethodDecorator {
    return function (
      target: any,
      methodName: any,
      descriptor: TypedPropertyDescriptor<any>
    ) {
      // 接受参数为当前类 和 接受参数为当前方法名称  和  方法的描述
      const realMethod = descriptor.value;
      descriptor.value = (lineText: string, datas: {}) => {
        let startIndex: number, endIndex: number;
        startIndex = slice.start
          ? lineText.lastIndexOf(slice.start)
          : datas["firstNotWhiteSpaceIndex"];
        endIndex = slice.end
          ? lineText.lastIndexOf(slice.end)
          : lineText.lastIndexOf(".");
        // 把目标字符串选出来
        const replacement = lineText.substring(startIndex, endIndex).trimEnd();
        if (replacement.length == 0) {
          return null;
        }
        // 加入 datas
        datas["startIndex"] = startIndex;
        datas["endIndex"] = endIndex;
        return realMethod(replacement, datas);
      };
    };
  }

  export namespace Regex {
    export function Search(targetRegex: TargetRegex) {
      return function (
        target: any,
        methodName: any,
        descriptor: TypedPropertyDescriptor<any>
      ) {
        if (!targetRegex.regex) {
          return null;
        }
        const realMethod = descriptor.value;
        descriptor.value = (lineText: string, datas: {}) => {
          const startIndex = lineText.search(targetRegex.regex);
          if (startIndex == -1) {
            return null;
          }
          if (!targetRegex.end) {
            targetRegex.end = ".";
          }
          let endIndex = lineText.lastIndexOf(targetRegex.end);
          const replacement = lineText.substring(startIndex, endIndex);
          if (replacement.length == 0) {
            return null;
          }
          datas["startIndex"] = startIndex;
          datas["endIndex"] = endIndex;
          return realMethod(replacement, datas);
        };
      };
    }

    export function Match(targetRegex: TargetRegex) {
      return function (
        target: any,
        methodName: any,
        descriptor: TypedPropertyDescriptor<any>
      ) {
        if (!targetRegex.regex) {
          return null;
        }
        if (!targetRegex.end) {
          targetRegex.end = ".";
        }
        const realMethod = descriptor.value;

        class Wrapper {
          @Target.Slice({ start: targetRegex.start, end: targetRegex.end })
          static solve(lineText: string, datas: {}) {
            // 此时lineText已经被 @Target.Slice 选取出来了
            // 但是 lineText可能有前导和后导的空白字符, 这里不进行去除
            let matchedArray = lineText.match(targetRegex.regex);
            if (
              !matchedArray ||
              matchedArray.index !== 0 ||
              matchedArray.length == 0
            ) {
              return null;
            }
            const replacement = matchedArray[0];
            // 调用真实方法
            return realMethod(replacement, datas);
          }
        }
        descriptor.value = Wrapper.solve;
      };
    }
  }
}
