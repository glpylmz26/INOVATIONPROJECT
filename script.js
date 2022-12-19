const departments = ["La Albiceleste (Argentina)", "Les Bleus (France)"];
const teamsOfArgentinaDep = ["Dipsy", "Tinky-Winky"];
const teamsOfFrenchDep = ["Laa-Laa","Po"];

const roleOfTeamDipsy = ["Architect", "Butcher"];
const roleOfTeamTinkyWinky = ["Chef", "Doctor"];
const roleOfTeamLaaLaa = ["Electrician", "Fisherman"];
const roleOfTeamPo = ["Ghost", "Holiday Rep"];

for (let i = 0; i < departments.length; i++) {
    let option = `<a class="dropdown-item x" onclick= "dropdownOpt(event)" id="dropdownopt${i + 1}" href="#">${departments[i]}</a>`;
    document
      .getElementById("dropdown-menu1")
      .insertAdjacentHTML("beforeend", option);
  }
  let debt;
  let teams;
  let role;
function dropdownOpt(event){
    debt =  event.target.innerText;
    switch(debt){
        case(departments[0]): teams = teamsOfArgentinaDep; break;
        case(departments[1]): teams = teamsOfFrenchDep; break;
    }
    document.getElementById("dropdown-menu2").innerHTML = "";
    document.getElementById("dropdown1").innerText = event.target.innerText;
    for (let i = 0; i < teams.length; i++) {
        let option = `<a class="dropdown-item" onclick= "dropdownOpt2(event)" id="dropdownopt${i + departments.length+1}" href="#">${teams[i]}</a>`;
        document
        .getElementById("dropdown-menu2")
        .insertAdjacentHTML("beforeend", option);
    }
    
}; 

function dropdownOpt2(event){
    let team = event.target.innerText;
    switch(team){
        case(teamsOfArgentinaDep[0]): role = roleOfTeamDipsy; break;
        case(teamsOfArgentinaDep[1]): role = roleOfTeamTinkyWinky;break;
        case(teamsOfFrenchDep[0]): role = roleOfTeamLaaLaa;break;
        case(teamsOfFrenchDep[1]): role = roleOfTeamPo;break;
    }
    document.getElementById("dropdown-menu3").innerHTML = "";
    document.getElementById("dropdown2").innerText = event.target.innerText;
    for (let i = 0; i < role.length; i++) {
            let option = `<a class="dropdown-item"  onclick= "dropdownOpt3(event)" id="dropdownopt${i + departments.length+teams.length+1}" href="#">${role[i]}</a>`;
            document
              .getElementById("dropdown-menu3")
              .insertAdjacentHTML("beforeend", option);
          }
}; 
function dropdownOpt3(event){
    if(document.getElementById("container")){
        console.log(`${document.getElementById("container")}`)
        document.getElementById("container").outerHTML="";
    }
    let iframe = ``;
    document.getElementById("dropdown3").innerText = event.target.innerText;
    switch(event.target.innerText){
        case(roleOfTeamDipsy[0]): iframe = '<div class="container" id = "container" ><iframe class="responsive-iframe" width = "100%" height = "800px" src="https://make.powerautomate.com/environments/Default-916e3244-4945-42e9-9c5c-eeca5d5b8748/flows/ac5b8d2b-97de-488d-989a-25ed80a3bba8/run"></iframe></div>';
        case(roleOfTeamDipsy[1]): iframe = '<div class="container" id = "container" ><iframe class="responsive-iframe" width = "100%" height = "800px" src="https://make.powerautomate.com/environments/Default-916e3244-4945-42e9-9c5c-eeca5d5b8748/flows/eccfe206-fcf1-4322-bcfb-5d64ffe13dd9/run"></iframe></div>';
        case(roleOfTeamTinkyWinky[0]): iframe = '<div class="container" id = "container" ><iframe class="responsive-iframe" width = "100%" height = "800px" src="https://make.powerautomate.com/environments/Default-916e3244-4945-42e9-9c5c-eeca5d5b8748/flows/256bdac7-d1b6-405c-9395-137ec2ded0f4/run"></iframe></div>';
        case(roleOfTeamTinkyWinky[1]): iframe = '<div class="container" id = "container" ><iframe class="responsive-iframe" width = "100%" height = "800px" src="https://make.powerautomate.com/environments/Default-916e3244-4945-42e9-9c5c-eeca5d5b8748/flows/2f3cc736-fa37-4f8c-8a58-644f322eacf2/run"></iframe></div>';
        case(roleOfTeamLaaLaa[0]): iframe = '<div class="container" id = "container" ><iframe class="responsive-iframe" width = "100%" height = "800px" src="https://make.powerautomate.com/environments/Default-916e3244-4945-42e9-9c5c-eeca5d5b8748/flows/4dff38c8-f330-4d0e-899f-a1c2e65cb211/run"></iframe></div>';
        case(roleOfTeamLaaLaa[1]): iframe = '<div class="container" id = "container" ><iframe class="responsive-iframe" width = "100%" height = "800px" src="https://make.powerautomate.com/environments/Default-916e3244-4945-42e9-9c5c-eeca5d5b8748/flows/ebca13ef-37bb-49eb-8e6b-a6daabc40ed5/run"></iframe></div>';
        case(roleOfTeamPo[0]): iframe = '<div class="container" id = "container" ><iframe class="responsive-iframe" width = "100%" height = "800px" src="https://make.powerautomate.com/environments/Default-916e3244-4945-42e9-9c5c-eeca5d5b8748/flows/76236bd1-9c62-4d0c-9bf7-6594b6997887/run"></iframe></div>';
        case(roleOfTeamPo[1]): iframe = '<div class="container" id = "container" ><iframe class="responsive-iframe" width = "100%" height = "800px" src="https://make.powerautomate.com/environments/Default-916e3244-4945-42e9-9c5c-eeca5d5b8748/flows/4787e06d-e805-4d93-98e3-0381ec6edaa0/run"></iframe></div>';
    }
    const resulttext = document.getElementById("submit");
    resulttext.insertAdjacentHTML("beforebegin",iframe);

    
}; 
