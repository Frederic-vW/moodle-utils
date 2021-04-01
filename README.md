# moodle-utils

Code snippets for the free and [open-source](https://github.com/moodle/moodle) online learning platform [moodle](https://moodle.org/).  

## Clickable Q/A elements

**Question (un/-fold)**

This html/javascript snippet implements a question/answer text box, where the answer is toggled by clicking. To make it work, your *question* needs an html `id` attribute starting with `id=q-`, and a matching *answer* id-attribute starting with `a-`. In the example below, the matching `id` pair is: `id=q-test` in the question, and `id=a-test` for the answer. If you use several questions in one html file, choose a different suffix (`-test` in the example) for each question.

**html** part:
```html
<p><button id="q-test" type="button" style="background-color: #777; color: white; cursor: pointer; padding: 18px; width: 100%; border: none; text-align: left; outline: none; font-size: 15px;">Question: what happens if you click this?</button></p>
<div id="a-test" style="padding: 0 18px; display: none; overflow: hidden; background-color: #f1f1f1;">...you may get an answer!</div>
```

**javascript** part:

```javascript
<script type="text/javascript">
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
</script>
```


## Coloured text boxes

Choose other colors from [this site](https://htmlcolorcodes.com/colors/).

**Example-1**

Rendered element:
<p style="background-color: #e7f3fe; color: black; cursor: pointer; padding: 18px; width: 100%; border-left: 12px solid #2196F3; text-align: left; outline: none; font-size: 15px;"><strong>Exercise</strong>: Do something!</p>

Code:
```html
<p style="background-color: #e7f3fe; color: black; cursor: pointer; padding: 18px; width: 100%; border-left: 12px solid #2196F3; text-align: left; outline: none; font-size: 15px;"><strong>Exercise</strong>: Do something!</p>
```

**Example-2**

Rendered element:
<p style="background-color: #ddffdd; color: black; cursor: pointer; padding: 18px; width: 100%; border-left: 12px solid #4CAF50; text-align: left; outline: none; font-size: 15px;"><strong>Success!</strong> well done</p>

Code:
```html
<p style="background-color: #ddffdd; color: black; cursor: pointer; padding: 18px; width: 100%; border-left: 12px solid #4CAF50; text-align: left; outline: none; font-size: 15px;"><strong>Success!</strong> well done</p>
```


**Example-3**

Rendered element:
<p style="background-color: #ffffcc; color: black; cursor: pointer; padding: 18px; width: 100%; border-left: 12px solid #ffeb3b; text-align: left; outline: none; font-size: 15px;"><strong>Warning</strong>: true = false</p>

Code:
```html
<p style="background-color: #ffffcc; color: black; cursor: pointer; padding: 18px; width: 100%; border-left: 12px solid #ffeb3b; text-align: left; outline: none; font-size: 15px;"><strong>Warning</strong>: true = false</p>
```

---
This document:  
[source](https://github.com/Frederic-vW/moodle-utils/edit/main/README.md)  
[web](https://frederic-vw.github.io/moodle-utils/)
