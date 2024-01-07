function loadData(){
const url='https://randomuser.me/api/';
fetch(url).then(response=>{
    if(!response.ok){
        console.log("Newtork response was not ok");
    }
    return response.json();
}).then(data=>{
    document.getElementById("fname").innerText=data.results[0].name.first;
    document.getElementById("lname").innerText=data.results[0].name.last;
    document.getElementById("email").innerText=data.results[0].email;
})
}