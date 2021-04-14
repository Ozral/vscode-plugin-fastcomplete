# FastComplete

FastComplete 为主流语言(c/cpp,java 等) 提供了许多后缀(postfix)用于补全代码. 你可以使用本插件来更好地完成代码!

## 特性

- ### c/c++

  |            后缀 | 补全结果                                |
  | --------------: | --------------------------------------- |
  |         **.if** | `if (${expr}) {}`                       |
  |        **.not** | `!{expr}`                               |
  |       **.fori** | `for (int i = 0; i < ${expr}; i++) {}`  |
  |       **.forr** | `for (int i = ${expr}; i >= 0; i--) {}` |
  |      **.while** | `while(${expr}) {}`                     |
  |     **.return** | `return {expr};`                        |
  |      **.class** | `class ${expr} {}`                      |
  |     **.struct** | `struct ${expr} {}`                     |
  |        **.ptr** | `*${expr} `                             |
  |       **.null** | `if (${expr} == NULL) {}`               |
  |    **.notnull** | `if (${expr} != NULL) {}`               |
  |    **.nullptr** | `if (${expr} == nullptr) {}`            |
  | **.notnullptr** | `if (${expr} != nullptr) {}`            |

- ## java

  |         后缀 | 补全结果                                |
  | -----------: | --------------------------------------- |
  |     **.var** | `class varName = ${expr};`              |
  |      **.if** | `if (${expr}) {}`                       |
  |     **.not** | `!{expr}`                               |
  |    **.null** | `if (${expr} == null) {}`               |
  | **.notnull** | `if (${expr} != null) {}`               |
  |    **.fori** | `for (int i = 0; i < ${expr}; i++) {}`  |
  |    **.forr** | `for (int i = ${expr}; i >= 0; i--) {}` |
  |   **.while** | `while(${expr}) {}`                     |
  |    **.sout** | `System.out.println(${expr});`          |
  |    **.souf** | `System.out.printf("$1",${expr});`      |
  |    **.serr** | `System.err.println(${expr});`          |
  |  **.return** | `return {expr};`                        |

- ### js/ts

  |        后缀 | 补全结果                                |
  | ----------: | --------------------------------------- |
  |     **.if** | `if (${expr}) {}`                       |
  |    **.not** | `!{expr}`                               |
  |   **.fori** | `for (int i = 0; i < ${expr}; i++) {}`  |
  |   **.forr** | `for (int i = ${expr}; i >= 0; i--) {}` |
  |  **.while** | `while(${expr}) {}`                     |
  | **.return** | `return {expr};`                        |

- ### python
  |         后缀 | 补全结果                                                                                               |
  | -----------: | ------------------------------------------------------------------------------------------------------ |
  |     **.len** | `len(${expr})`                                                                                         |
  |  **.return** | `return ${expr}`                                                                                       |
  |     **.for** | `for i in range(${expr}): ` or `for i in ${expr}`                                                      |
  |      **.if** | `if ${expr}:`                                                                                          |
  |    **.none** | `if ${expr} is None:`                                                                                  |
  | **.notnone** | `if ${expr} is not None:`                                                                              |
  |     **.not** | `not ${expr}`                                                                                          |
  |   **.print** | `print(${expr})`                                                                                       |
  |     **.var** | `varName = ${expr}`                                                                                    |
  |   **.while** | `while ${expr}:`                                                                                       |
  |  **.matrix** | `用于生成二维矩阵 输入 1 2 3 4 2(矩阵的行) 2(矩阵的列).matrix 会生成一个 2 行 2 列的矩阵[[1,2],[3,4]]` |
- ### golang

  |           后缀 | 补全结果                         |
  | -------------: | -------------------------------- |
  |       **.var** | `varName := ${expr}`             |
  |     **.const** | `const varName type = ${expr}`   |
  |       **.for** | `for i, elem in range ${expr}{}` |
  |        **.if** | `if (${expr}) {}`                |
  |       **.nil** | `if ${expr} == nil {}`           |
  |    **.notnil** | `if ${expr} != nil {}`           |
  |    **.switch** | `switch ${expr} {}`              |
  |       **.err** | `errors.New(${expr}) `           |
  | **.interface** | `type ${expr} interface {}`      |
  |    **.struct** | `type ${expr} struct {}`         |
  |    **.printf** | `fmt.Printf("%+v\n",${expr})`    |
  |   **.println** | `fmt.Println(${expr})`           |
  |       **.len** | `len(${expr})`                   |
  |    **.return** | `return ${expr}`                 |

## 许可证

MIT © Yang Haoyu

## 联系我

- gmail : ishowieyoung@gmail.com<br/>
- outlook : ishowieyoung@outlook.com<br/>
- 163 :ishowieyoung@163.com

---

# FastComplete

This plugin provides many postfixs of popular languages(e.g. c/cpp, java and so on) so that you can complete code more quickly!

## Features

- ### c/c++

  |         postfix | outcome                                 |
  | --------------: | --------------------------------------- |
  |         **.if** | `if (${expr}) {}`                       |
  |        **.not** | `!{expr}`                               |
  |       **.fori** | `for (int i = 0; i < ${expr}; i++) {}`  |
  |       **.forr** | `for (int i = ${expr}; i >= 0; i--) {}` |
  |      **.while** | `while(${expr}) {}`                     |
  |     **.return** | `return {expr};`                        |
  |      **.class** | `class ${expr} {}`                      |
  |     **.struct** | `struct ${expr} {}`                     |
  |        **.ptr** | `*${expr} `                             |
  |       **.null** | `if (${expr} == NULL) {}`               |
  |    **.notnull** | `if (${expr} != NULL) {}`               |
  |    **.nullptr** | `if (${expr} == nullptr) {}`            |
  | **.notnullptr** | `if (${expr} != nullptr) {}`            |

- ## java

  |      postfix | outcome                                 |
  | -----------: | --------------------------------------- |
  |     **.var** | `class varName = ${expr};`              |
  |      **.if** | `if (${expr}) {}`                       |
  |     **.not** | `!{expr}`                               |
  |    **.null** | `if (${expr} == null) {}`               |
  | **.notnull** | `if (${expr} != null) {}`               |
  |    **.fori** | `for (int i = 0; i < ${expr}; i++) {}`  |
  |    **.forr** | `for (int i = ${expr}; i >= 0; i--) {}` |
  |   **.while** | `while(${expr}) {}`                     |
  |    **.sout** | `System.out.println(${expr});`          |
  |    **.souf** | `System.out.printf("$1",${expr});`      |
  |    **.serr** | `System.err.println(${expr});`          |
  |  **.return** | `return {expr};`                        |

- ### js/ts

  |     postfix | outcome                                 |
  | ----------: | --------------------------------------- |
  |     **.if** | `if (${expr}) {}`                       |
  |    **.not** | `!{expr}`                               |
  |   **.fori** | `for (int i = 0; i < ${expr}; i++) {}`  |
  |   **.forr** | `for (int i = ${expr}; i >= 0; i--) {}` |
  |  **.while** | `while(${expr}) {}`                     |
  | **.return** | `return {expr};`                        |

- ### python
  |      postfix | outcome                                                                                |
  | -----------: | -------------------------------------------------------------------------------------- |
  |     **.len** | `len(${expr})`                                                                         |
  |  **.return** | `return ${expr}`                                                                       |
  |     **.for** | `for i in range(${expr}): ` or `for i in ${expr}`                                      |
  |      **.if** | `if ${expr}:`                                                                          |
  |    **.none** | `if ${expr} is None:`                                                                  |
  | **.notnone** | `if ${expr} is not None:`                                                              |
  |     **.not** | `not ${expr}`                                                                          |
  |   **.print** | `print(${expr})`                                                                       |
  |     **.var** | `varName = ${expr}`                                                                    |
  |   **.while** | `while ${expr}:`                                                                       |
  |  **.matrix** | `generate a matrix, input:1 2 3 4 2(row) 2(col).matrix,it will generate:[[1,2],[3,4]]` |
- ### golang

  |        postfix | outcome                           |
  | -------------: | --------------------------------- |
  |       **.var** | `varName := ${expr}`              |
  |     **.const** | `const varName type = ${expr}`    |
  |       **.for** | `for i, elem in range ${expr}{ }` |
  |        **.if** | `if (${expr}) { }`                |
  |       **.nil** | `if ${expr} == nil { }`           |
  |    **.notnil** | `if ${expr} != nil { }`           |
  |    **.switch** | `switch ${expr} { }`              |
  |       **.err** | `errors.New(${expr}) `            |
  | **.interface** | `type ${expr} interface { }`      |
  |    **.struct** | `type ${expr} struct { }`         |
  |    **.printf** | `fmt.Printf("%+v\n",${expr})`     |
  |   **.println** | `fmt.Println(${expr})`            |
  |       **.len** | `len(${expr})`                    |
  |    **.return** | `return ${expr}`                  |

## License

MIT © Howie Young

## Contact me

- gmail : ishowieyoung@gmail.com<br/>
- outlook : ishowieyoung@outlook.com<br/>
- 163 :ishowieyoung@163.com

**Happy coding!**
