# moodle-utils

Code snippets for the free and [open-source](https://github.com/moodle/moodle) online learning platform [moodle](https://moodle.org/).  
See the rendered version at: https://frederic-vw.github.io/moodle-utils/

**Javascript** snippet to toggle foldable text boxes:

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

**Question (un/-fold)**

This snippet needs the javascript code above to (un-)fold the answer.  
Code:
```html
<p><button id="q-test" type="button" style="background-color: #777; color: white; cursor: pointer; padding: 18px; width: 100%; border: none; text-align: left; outline: none; font-size: 15px;">Question: what happens if you click this?</button></p>
<div id="a-test" style="padding: 0 18px; display: none; overflow: hidden; background-color: #f1f1f1;">...you may get an answer!</div>
```

**Exercise (blue)**

Code:
```html
<p style="background-color: #e7f3fe; color: black; cursor: pointer; padding: 18px; width: 100%; border-left: 12px solid #2196F3; text-align: left; outline: none; font-size: 15px;"><strong>Exercise</strong>: Do something! (not clickable)</p>
```

Rendered:
<p style="background-color: #e7f3fe; color: black; cursor: pointer; padding: 18px; width: 100%; border-left: 12px solid #2196F3; text-align: left; outline: none; font-size: 15px;"><strong>Exercise</strong>: Do something! (not clickable)</p>


**Success (green)**

Code:
```html
<p style="background-color: #ddffdd; color: black; cursor: pointer; padding: 18px; width: 100%; border-left: 12px solid #4CAF50; text-align: left; outline: none; font-size: 15px;"><strong>Success!</strong>: well done (not clickable)</p>
```

Rendered:
<p style="background-color: #ddffdd; color: black; cursor: pointer; padding: 18px; width: 100%; border-left: 12px solid #4CAF50; text-align: left; outline: none; font-size: 15px;"><strong>Success!</strong>: well done (not clickable)</p>


**Info (blue)**
Code:
```html
<p style="background-color: #e7f3fe; color: black; cursor: pointer; padding: 18px; width: 100%; border-left: 12px solid #2196F3; text-align: left; outline: none; font-size: 15px;"><strong>Info:</strong>: true=false</p>
```

Rendered:
<p style="background-color: #e7f3fe; color: black; cursor: pointer; padding: 18px; width: 100%; border-left: 12px solid #2196F3; text-align: left; outline: none; font-size: 15px;"><strong>Info:</strong>: true=false</p>


**Warning (yellow)**
Code:
```html
<p style="background-color: #ffffcc; color: black; cursor: pointer; padding: 18px; width: 100%; border-left: 12px solid #ffeb3b; text-align: left; outline: none; font-size: 15px;"><strong>Warning:</strong>: mind-the-gap</p>
```

Rendered:
<p style="background-color: #ffffcc; color: black; cursor: pointer; padding: 18px; width: 100%; border-left: 12px solid #ffeb3b; text-align: left; outline: none; font-size: 15px;"><strong>Warning:</strong>: mind-the-gap</p>


**Info (green)**
Code:
```html
<p style="background-color: #ddffdd; color: black; cursor: pointer; padding: 18px; width: 100%; border-left: 12px solid #4CAF50; text-align: left; outline: none; font-size: 15px;"><strong>Info</strong>: ...another info</p>
```

Rendered:
<p style="background-color: #ddffdd; color: black; cursor: pointer; padding: 18px; width: 100%; border-left: 12px solid #4CAF50; text-align: left; outline: none; font-size: 15px;"><strong>Info</strong>: ...another info</p>
