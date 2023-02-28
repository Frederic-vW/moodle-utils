var questions = document.getElementsByTagName("button");
for (var q_btn of questions) {
  try {
    var btnId = q_btn.getAttribute("id");
    if (btnId.startsWith("q-")) {
      q_btn.addEventListener("click", getBtnEvent(btnId), false)
    }
  } catch(e) {}
}

function getBtnEvent(btnId){
  function f() {
    var ans_id = btnId.replace("q-","a-");
    var ans = document.getElementById(ans_id);
    if (ans.style.display === "block") {
      ans.style.display = "none";
    } else {
      ans.style.display = "block";
    }
  };
  return f;
}
