// 古いブラウザーで DOM ノードを選択する方法は少ない
const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');

// 以下は DOM 内で次の兄弟要素にたどり着くための技です。
// これは容易に無限ループになることがあるため、危険です。
// 新しいブラウザーでは、element.nextElementSibling を使用しましょう。
let error = email;
while ((error = error.nextSibling).nodeType != 1);

// HTML5 仕様書より
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// 多くの古いブラウザーは addEventListener メソッドをサポートしていません。
// 以下はこれを扱うためのシンプルな方法です。なお唯一の方法ではありません。
function addEvent(element, event, callback) {
    let previousEventCallBack = element["on" + event];
    element["on" + event] = function (e) {
        const output = callback(e);

        // `false` を返すコールバックはコールバックチェーンを止めて、
        // イベントコールバックの実行を中断します。
        if (output === false) return false;

        if (typeof previousEventCallBack === 'function') {
            output = previousEventCallBack(e);
            if (output === false) return false;
        }
    }
};

// ここから検証制約の再構築ができます。
// CSS の疑似クラスに頼ることはできないため、メールアドレスフィールドで
// valid/invalid クラスを明示的に設定しなければなりません。
addEvent(window, "load", function () {
    // ここで、フィールドが空かを確認しています (フィールドは必須入力ではありません)
    // 空でなければ、内容部が適切な電子メールアドレスかを確認します。
    const test = email.value.length === 0 || emailRegExp.test(email.value);

    email.className = test ? "valid" : "invalid";
});

// ユーザーがフィールドに入力したときに、何をするかを定義します。
addEvent(email, "input", function () {
    const test = email.value.length === 0 || emailRegExp.test(email.value);
    if (test) {
        email.className = "valid";
        error.textContent = "";
        error.className = "error";
    } else {
        email.className = "invalid";
    }
});

// ユーザーがデータを送信しようとしたときに何をするかを定義します。
addEvent(form, "submit", function () {
    const test = email.value.length === 0 || emailRegExp.test(email.value);

    if (!test) {
        email.className = "invalid";
        error.textContent = "I expect an e-mail, darling!";
        error.className = "error active";

        // 一部の古いブラウザーは event.reventDefault() メソッドをサポートしていません。
        return false;
    } else {
        email.className = "valid";
        error.textContent = "";
        error.className = "error";
    }
});