# moodle-utils

Code snippets for the free and [open-source](https://github.com/moodle/moodle) online learning platform [moodle](https://moodle.org/).  
See the rendered version at: https://frederic-vw.github.io/moodle-utils/

**Javascript** snippet to toggle foldable text boxes:

```javascript
<script type="text/javascript">// <![CDATA[
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
// ]]></script>
```

**Warning (pink)**

Code:
```html
<p style="background-color: #ffdddd; color: black; cursor: pointer; padding: 18px; width: 100%; border-left: 12px solid #2196F3; text-align: left; outline: none; font-size: 15px;"><strong>Exercise</strong>: Do something! (not clickable)</p>
```

Rendered:
<p style="background-color: #ffdddd; color: black; cursor: pointer; padding: 18px; width: 100%; border-left: 12px solid #2196F3; text-align: left; outline: none; font-size: 15px;"><strong>Exercise</strong>: Do something! (not clickable)</p>


**Success (green)**
```html
<div style="background-color: #ddffdd; border-left: 12px solid #4CAF50;">
<p><strong> Success! </strong> Some text...</p>
</div>
```

**Info (blue)**
```html
<p style="background-color: #e7f3fe; border-left: 12px solid #2196F3;">
<p><strong> Info! </strong> Some text...</p>
</p>
```

**Warning (yellow)**
```html
<div style="background-color: #ffffcc; border-left: 12px solid #ffeb3b;">
<p><strong> Warning! </strong> Some text...</p>
</div>
```

**Exercise**
```html
<p style="background-color: #e7f3fe; color: black; cursor: pointer; padding: 18px; width: 100%; border-left: 12px solid #2196F3; text-align: left; outline: none; font-size: 15px;">
<strong>Exercise</strong>: Try and visualize all processes involved in skeletal muscle excitation-contraction coupling.
</p>
```

**Info (green)**
```html
<p style="background-color: #ddffdd; color: black; cursor: pointer; padding: 18px; width: 100%; border-left: 12px solid #4CAF50; text-align: left; outline: none; font-size: 15px;"><strong>Info</strong>: This mechanism will be demonstrated in the muscle practical!</p>
```
