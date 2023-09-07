/**
 * 이 모듈은 jsdoc 생성 시 external member를 제외하기 위해 작성되었습니다.
 *
 * @module jsdoc-exclude-member-plugin
 * @author Yongisk Yun <comnori@gmail.com>
 */

exports.handlers = {
  processingComplete: function ({ doclets }) {
    // Your code here.

    doclets
      .filter(({ kind, scope }) => kind === "external" && scope === "global")
      .forEach((doclet) => {
        doclet.undocumented = true;
      });
  },
};
