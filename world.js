window.addEventListener('load', ()=>{

    let values = document.querySelector("input#country").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'');
    let url = `world.php?country= ${values}`.replace( /"[^-0-9+@#/%?~_|!:,.;\(\)]"/g,'');
    let headering = document.querySelector("header h1");
    headering.style.color = "#FFFFFF";
    headering.style.transition = "all 2s ease-in-out";
    
    let results = document.querySelector("div#result");
    document.querySelector("button#lookup").addEventListener("click", (event)=>{

        ajaxCall(event);

    });

    document.querySelector("button#citylookup").addEventListener("click", (event)=>{
        values = document.querySelector("input#country").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'');
        url = `world.php?country= ${values}&context=cities`.replace( /"[^-0-9+@#/%?~_|!:,.;\(\)]"/g,'');
        ajaxCall(event);
    });

    let ajaxCall = (event) =>{
        event.preventDefault();
        fetch(url, {method : 'GET'})
        .then(resp => resp.text())
        .then(info => {
            results.innerHTML = '';
            results.innerHTML = info;
        })
    }

    
});