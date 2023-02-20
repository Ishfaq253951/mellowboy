let fkcodes = "https://fkcodes.com";
let google = "https://www.google.com";
let youtube = "https://www.youtube.com";
let github = "https://github.com/Ishfaq253951";


const date = new Date();
let currentDate = date.toDateString();
let currentTime = date.toTimeString();

help = [
    "<br>",
    '<span class="command">help</span>                  Provides you with a list of commands',
    '<span class="command">clear</span>                 Clears the screen for you',
    '<span class="command">welcome</span>               Displays the welcome banner',
    '<span class="command">refresh</span>               Refreshes the page',
    '<span class="command">quote</span>                 Gives the quote of the day',
    '<span class="command">list-quotes</span>           Lists all the available quotes',
    '<span class="command">whatisdate</span>            Gives you the current date or just type <b>\'date\'</b>',
    '<span class="command">whatistime</span>            Gives you the current time or just type <b>\'time\'</b>',
    '<span class="command">pwd</span>                   Prints the current working directory.',
    '<span class="command">whoami</span>                Who am i?',
    '<span class="command">whoareyou</span>             Who are you?',
    '<span class="command">quit</span>                  Quit app.',

    '<span class="section">               Links</span>',
    '<span class="command">fkcodes</span>               Subscribe to his youtube channel',
    '<span class="command">youtube</span>               Watch a video on youtube',
    '<span class="command">google</span>                Make a quick google search',
    '<span class="command">github</span>                View my <a href="https://github.com/Ishfaq253951"><b>github</b></a> page',
    `<span>               &copy;2023</span>`
]

pwd = [
    "You are currently in a browser on the internet. Unless you downloaded the source code which...",
    "<br>",
    "You are using a computer though, or a phone...",
    "<br>",
    "Ughh. I have no idea where you are! :(",
]

welcome = [
    '<br>',
    `<span class="index">Mellowboy (M) FKCodes (FK) really inspired this project! Have fun with it!</span><br>`,
    `<br>`,
    `<span class="banner-welcome">
        <span>██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗</span><br>
        <span>██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝</span><br>
        <span>██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  </span><br>
        <span>██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  </span><br>
        <span>╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗</span><br>
        <span> ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝ TO MELLOWBOY HOME<span><br>
    </span>`,
    `<span class="banner">Type <span class="command">'github'</span> or click <a href="https://github.com/Ishfaq253951" target="_blank"><b>here</b></a> to view my github page.</span>`,
    `<span class="banner">For a view the available command, type <span class="command">'help'</span></span>`,
    `<br>`
]

openingLink = [
    `<span class="link">   Opening Link in new tab...</span><br>`,
]

whoareyou = [
    "You don't remember who I am? This must be starting signs of old age."
]

whoami = [
    "I don't know, you tell me."
]

quote = [
    "I am death, the destroyer of worlds. -<h>Robert Oppenheimer</h>",
    "Life is what happens when you're busy making other plans. -<h>John Lennon</h>",
    "Without fear there is no bravery. -<h>Sally Malcolm</h>"
]

quit = [
    "Termination failed with code 402!!",
    "Type 'exit' to get more details."
]

exit = [
    "You're not going anywhere like this!",
    "Close the browser tab, dummy! This ain't a real terminal!"
]