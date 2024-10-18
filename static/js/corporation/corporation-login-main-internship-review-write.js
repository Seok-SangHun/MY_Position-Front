// editor_wrap 내부의 텍스트를 카운트하는 함수
const editorWrap = document.getElementById("qust_detail");
const postCount = document.querySelector(".post_count em");

editorWrap.addEventListener("input", function () {
    let textLength = editorWrap.innerText.length;

    // 글자 수를 실시간으로 업데이트
    postCount.textContent = textLength;
});
document.querySelector(".btn_qna_write").addEventListener("click", function () {
    const titleInput = document.getElementById("qst_title");
    const contentInput = document.getElementById("qust_detail");
    const dimmed = document.getElementById("dimmed");
    const modalAlert = document.getElementById("layer_qna_alert");
    const alertText = document.getElementById("alert_text");

    // 제목이 비어있을 경우
    if (titleInput.value.trim() === "") {
        alertText.innerText = "앗! 게시글 제목 입력하고 작성 완료해주세요!";
        dimmed.style.display = "block";
        modalAlert.style.display = "block";
        return;
    }

    // 내용이 비어있을 경우
    if (contentInput.innerText.trim() === "") {
        alertText.innerText = "앗! 게시글 내용을 입력하고 작성 완료해주세요!";
        dimmed.style.display = "block";
        modalAlert.style.display = "block";
        return;
    }

    // 모든 입력이 완료되었을 때 처리
    console.log("제목과 내용이 모두 입력되었습니다.");
});

// 모달 닫기 버튼 (X 버튼) 클릭 시 모달 닫기
document
    .querySelector(".btn_layer_close")
    .addEventListener("click", function () {
        document.getElementById("dimmed").style.display = "none";
        document.getElementById("layer_qna_alert").style.display = "none";
    });

// 확인 버튼 클릭 시 모달 닫기
document.querySelector(".btn_confirm").addEventListener("click", function () {
    document.getElementById("dimmed").style.display = "none";
    document.getElementById("layer_qna_alert").style.display = "none";
});