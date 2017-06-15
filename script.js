window.onload = function() {
    var output,
        screen,
        limit,
        zero,
        operator;

    screen = document.getElementById("result");

    document.getElementById("period").addEventListener("click", function() {
        period = this.value;
        if(screen.innerHTML === "") {
            output = screen.innerHTML = screen.innerHTML.concat("0.");
        }
        else if(screen.innerHTML === output) {
            screen.innerHTML = screen.innerHTML.concat(".");
        }
    },false);

    document.getElementById("equal").addEventListener("click", function() {
      if(screen.innerHTML === output) {
        screen.innerHTML = eval(output);
      }
      else {
            screen.innerHTML = "";
      }
      if(output.length > 13) {
            output = output.substring(0,13);
        }
    },false);

    document.getElementById("clear").addEventListener("click", function() {
        screen.innerHTML = "";
    },false);

    var op = document.getElementsByClassName("operator");
      var len2 = op.length;
      for(var i = 0; i < len2; i++ ) {
        op[i].addEventListener("click",function() {
        operator = this.value;
         if(screen.innerHTML === "") {
            screen.innerHTML = screen.innerHTML.concat("");
        }
        else if(output) {
            screen.innerHTML = output.concat(operator);
        }
    },false);
}

 var digit = document.getElementsByClassName("digit");
    var len = digit.length;
    for (var i=0; i<len; i++) {
        digit[i].addEventListener("click", function() {
            num = this.value;
            output = screen.innerHTML += num;
            limit = output.length;
            if(limit > 12) {
                alert("Your input is too long.");
            }
        },false);
    }
}