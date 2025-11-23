// --- AI Answer (placeholder logic) ---
function getAIAnswer() {
    const question = document.getElementById("ai-question").value;

    if (question.trim() === "") {
        alert("Please type a question.");
        return;
    }

    // Fake temporary AI reply
    let answer = "Here is a simple explanation for your question: " + question;

    document.getElementById("ai-answer").innerText = answer;

    // Later you can replace this with a real AI API
}



// --- Student Q&A Board ---
let questionList = [];

function postQuestion() {
    const q = document.getElementById("student-question").value;

    if (q.trim() === "") {
        alert("Write a question first.");
        return;
    }

    questionList.push(q);
    document.getElementById("student-question").value = "";

    updateList();
}

function updateList() {
    const ul = document.getElementById("question-list");
    ul.innerHTML = "";

    questionList.forEach((q) => {
        let li = document.createElement("li");
        li.innerText = q;
        ul.appendChild(li);
    });
}
