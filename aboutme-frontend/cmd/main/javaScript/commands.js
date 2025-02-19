export async function processCommand(command) {
    command = command.split(" ");
    //Utils
    if(command[0] == "help") {
        addToOld(command[0], helpString);} 
    else if(command[0] == "clear") {
        clearOld();} 
    else if(command[0] == "banner") {
        addToOld(command[0], bannerString);}
    else if(command[0] == "echo") {
        let echoCommandString = command[0]+" ";
        let echoString = "";
        for(let i = 1; i < command.length; i++) {
            echoCommandString += command[i]+" ";
            echoString += command[i]+" ";
        }
        addToOld(echoCommandString, echoString);} 
    else if(command[0] == "cat") {
        addToOld(command[0], catString);}
    else if(command[0] == "tamagotchi" || command[0] == "tama") {
        window.location.href = window.location + "tamagotchi/"; }
    else if(command[0] == "morse") {
        window.location.href = window.location + "morse/"; }
    //Github
    else if(command[0] == "repo" || command[0] == "about") {
        addToOld(command[0], repoString);}
    else if(command[0] == "projects" || command[0] == "repos") {
        let projectsString = "";
        let data = JSON.parse(await getURL("https://api.github.com/users/psikoo/repos"));
        for(let i = 0; i < data.length; i++) {
            console.log(data[i].full_name);
            projectsString += "<a href=\"https://github.com/"+data[i].full_name+"\" target=\"_blank\">&gt "+data[i].full_name+"</a><br>";
        }
        addToOld(command[0], projectsString);}
    else if(command[0] == "pages") {
        addToOld(command[0], pagesString);}
    //Other
    else if(command[0] == "admin") {
        window.location.href = "https://cait.moe:9090/"; }
    else if(command[0] == "pi") {
        window.location.href = "http://cait.moe:81/admin/"; }
    //Unknown
    else { addToOld(command[0], commandNotFoundString);}
}

function addToOld(command , content) {
    document.getElementById("old").innerHTML += "<div>psikoo@github.io:~$ "+command+"</div>";
    if(content != undefined) {
        document.getElementById("old").innerHTML += content;
    }
    document.getElementById("terminal").innerHTML = "psikoo@github.io:~$ ";
}

function clearOld() {
    document.getElementById("old").innerHTML = "";
}

async function getURL(url) {
    let apiToken = "";
    await fetch("token").then((res) => res.text()).then((text) => {
        apiToken = text;
    }).catch((e) => console.error(e));

    let headersList = {
        "Accept": "*/*",
        "Authorization": "token "+apiToken
    }

    let response = await fetch(url, { 
        method: "GET",
        headers: headersList
    });
    
    let data = await response.text();
    return data;
}

let helpString = `<pre class="customFont">
> Utility commands
    > help
    > clear
    > banner
    > echo
    > cat
> Sub pages
    > tamagotchi
    > morse
> Github
    > repo
    > projects
    > pages
    > aboutMe
</pre>`;

let bannerString = `<pre class="customFont">
                                                                            
██████╗ ███████╗██╗██╗  ██╗ ██████╗  ██████╗ ██╗    ██╗███████╗██████╗      
██╔══██╗██╔════╝██║██║ ██╔╝██╔═══██╗██╔═══██╗██║    ██║██╔════╝██╔══██╗     
██████╔╝███████╗██║█████╔╝ ██║   ██║██║   ██║██║ █╗ ██║█████╗  ██████╔╝     
██╔═══╝ ╚════██║██║██╔═██╗ ██║   ██║██║   ██║██║███╗██║██╔══╝  ██╔══██╗     
██║     ███████║██║██║  ██╗╚██████╔╝╚██████╔╝╚███╔███╔╝███████╗██████╔╝     
╚═╝     ╚══════╝╚═╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝  ╚══╝╚══╝ ╚══════╝╚═════╝  v1.0
For a list of available commands, type "help".                              
                                                                            </pre>`;

let catString = `<pre class="customFont">

⠀⠀⠀⠀⠀⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢿⣧⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⣿⣇⠀⢸⣿⣿⣦⣤⣄⣀⣴⣿⣷⠀⠀⠀
⠀⠀⠀⠀⠀⢸⣿⣿⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀
⠀⠀⠀⠀⢀⣼⣿⣿⣧⣿⣿⣿⣿⡟⣿⣿⣿⠻⣿⠂⡀⠀
⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣧⣿⣿⣿⣦⣿⣏⠁⠀
⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀
⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀
⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀
⢠⣾⣿⡿⠋⠀⠈⠙⣿⣿⣿⡿⣿⡿⠿⠟⢿⣿⣿⣷⣄⠀
⠈⠿⡿⠃⠀⠀⠀ ⠀⣿⣿⣿⣧⠀⠀⠀⠀⠀⠉⠻⣿⡿⠂
 ⠀⠀⠀⠀⠀⠀⠀  ⠈⢿⡿⠟⠃⠀⠀⠀⠀⠀⠀⠈⠀⠀

</pre>`;

let repoString = "<a href=\"https://github.com/psikoo/website\" target=\"_blank\">&gtgithub.com/psikoo/website</a>\nThis project was made with pure HTML, CSS and JS. To see how it was made use the command \"repo\". To see other projects of mine use the command \"projects\", or use the \"aboutMe\" command for more information on me.";

let pagesString= `<pre class="customFont">
> <a href=\"https://cait.moe\" target=\"_blank\">cait.moe</a>
> <a href=\"https://y2k.cait.moe\" target=\"_blank\">y2k.cait.moe</a>
> <a href=\"https://cmd.cait.moe\" target=\"_blank\">cmd.cait.moe</a>
    > <a href=\"https://cmd.cait.moe/tamagotchi\" target=\"_blank\">/tamagotchi</a>
    > <a href=\"https://cmd.cait.moe/morse\" target=\"_blank\">/morse</a>
> <a href=\"https://league.cait.moe\" target=\"_blank\">league.cait.moe</a>
</pre>`;

let commandNotFoundString = "The given command doesn't exist, to see list of available commands, type \"help\".";