let before = document.getElementById("before");
let liner = document.getElementById("liner");
let command = document.getElementById("typer"); 
let textarea = document.getElementById("texter"); 
let terminal = document.getElementById("terminal");

let git = 0;
let pw = false
let commands = [];

setTimeout(function() {
  loopLines(welcome, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
  }
  else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine(`guest@mellowboy~$ ` + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "welcome":
      loopLines(welcome, "", 80);
      break;
    case "refresh":
      location.reload();
      break;
    case "quote":
      addLine(getRandom(quote), "quote", 80);
      break;
    case "list-quotes":
      loopLines(quote, "quote", 80);
      break;
    case "whatisdate":
      addLine(currentDate, "date", 80);
      break;
    case "date":
      addLine(currentDate, "date", 80);
      break;
    case "whatistime":
      addLine(currentTime, "time", 80);
      break;
    case "time":
      addLine(currentTime, "time", 80);
      break;
    case "pwd":
      loopLines(pwd, "color2", 80);
      break;
    case "whoami":
      loopLines(whoami, "color2", 80);
      break;
    case "whoareyou":
      loopLines(whoareyou, "color2", 80);
      break;
    case "quit":
      loopLines(quit, "inherit", 80);
      break;
    case "exit":
      loopLines(exit, "color2", 80);
      break;

    //Links
    case "youtube":
      loopLines(openingLink, "", 60);
      newTab(youtube);
      break;
    case "google":
      loopLines(openingLink, "", 60);
      newTab(google);
      break;
    case "fkcodes":
      loopLines(openingLink, "", 60);
      newTab(fkcodes);
      break;
    case "github":
      loopLines(openingLink, "", 60);
      newTab(github);
      break;


    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  }
}

function getRandom(list) {
  return list[(Math.random()*list.length) | 0];
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  let t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    let next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}
