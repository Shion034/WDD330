// DOM ノードの選択法はたくさんあります。ここではフォーム自体、メールアドレス
// 入力ボックス、そしてエラーメッセージを配置する span 要素を取得しています。
const form = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const error = document.querySelector('#mail + span.error');

email.addEventListener("input", function (event) {
    // ユーザーが何かを入力するたびに、メールアドレスのフィールドが妥当かを
    // 確認します。

    if (email.validity.valid) {
        // エラーメッセージを表示している場合に、フィールドが妥当になれば
        // エラーメッセージを取り除きます。
        error.textContent = ""; // メッセージの内容物をリセットします
        error.className = "error"; // メッセージの表示状態をリセットします
    } else {
        // If there is still an error, show the correct error
        showError();
    }
});

form.addEventListener("submit", function (event) {
    // ユーザーがデータを送信しようとするたびに、メールアドレスの
    // フィールドが妥当かをチェックします。
    if (!email.validity.valid) {

        // フィールドが妥当ではない場合、独自のエラーメッセージを
        // 表示します。
        showError();
        // また、イベントをキャンセルしてフォームの送信を止めます。
        event.preventDefault();
    }
});

function showError() {
    if (email.validity.valueMissing) {
        // If the field is empty
        // display the following error message.
        emailError.textContent = 'You need to enter an e-mail address.';
    } else if (email.validity.typeMismatch) {
        // If the field doesn't contain an email address
        // display the following error message.
        emailError.textContent = 'Entered value needs to be an e-mail address.';
    } else if (email.validity.tooShort) {
        // If the data is too short
        // display the following error message.
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }

    // Set the styling appropriately
    emailError.className = 'error active';
}