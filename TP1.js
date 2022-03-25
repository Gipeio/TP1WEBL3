
async function recupLines(){
    const requete = await fetch('https://api.tisseo.fr/v1/lines.json?key=a3732a1074e2403ce364ad6e71eb998cb')
    let data = await requete.json()
    console.log(data)

    let text = "<ul>"
    for(i = 0;i < data.lines.line.length;i++){
        text += "<li onclick=\"getArrets("+data.lines.line[i].id+")\">"+data.lines.line[i].name+"</li>"
    }
    document.querySelector('#lignes').innerHTML = text+"</ul>";
}

async function getArrets(id){
    const requete = await fetch('https://api.tisseo.fr/v1/stop_points.json?key=a3732a1074e2403ce364ad6e71eb998cb&lineId='+ id)
    let data = await requete.json()
    console.log(data)
    let text = "<ul>"
    for(i = 0; i < data.physicalStops.physicalStop.length;i++){
        text += "<li onclick=\"getPassages("+data.physicalStops.physicalStop[i].id+")\">"+data.physicalStops.physicalStop[i].name+"</li>"
    }
    document.querySelector('#arrets').innerHTML = text+"</ul>";
}

async function getPassages(id){
    const requete = await fetch('https://api.tisseo.fr/v1/stops_schedules.json?key=a3732a1074e2403ce364ad6e71eb998cb&stopPointId='+ id)
    let data = await requete.json()
    console.log(data)
    let text = "<ul>"
    for(i = 0; i < data.departures.departure.length;i++){
        text +="<li>"+data.departures.departure[i].dateTime+"</li>";
    }
    document.querySelector('#horaires').innerHTML = text+"</ul>";
}
