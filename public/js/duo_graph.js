fetch("https://onderwijsdata.duo.nl/api/3/action/datastore_search?resource_id=aa057440-a653-41c4-8d73-d63cb0556135&limit=5")
.then( res => {
    return res.json();
})
.then(data => {
    console.log(data);  
})