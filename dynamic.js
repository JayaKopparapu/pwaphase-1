function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile1(data.profile1);
  career(data.career);
  education(data.education);
  skills(data.skills);
})
var profile=document.querySelector(".profile");
function profile1(p){
  var image=document.createElement("img");
  image.src=p.image;
  profile.append(image);
  var h2=document.createElement("h2");
  h2.textContent=p.name;
  profile.append(h2);
  var h1=document.createElement("h1");
  h1.textContent=p.designation;
  profile.append(h1);
  var h3=document.createElement("h3");
  h3.textContent=p.emailid;
  profile.append(h3);
  var h4=document.createElement("h4");
  h4.textContent=p.phoneno;
  profile.append(h4);
}
  var academic=document.querySelector(".academic");
  function career(c1){
  var h1=document.createElement("h1");
  h1.textContent="Career Objective";
  academic.append(h1);
  var hr=document.createElement("hr");
  academic.append(hr);
  var info=document.createElement("info");
  info.textContent=c1.info;
  academic.append(info);
}
  function education(e1){
    var h1=document.createElement("h1");
    h1.textContent="Education";
    academic.append(h1);
    var hr=document.createElement("hr");
    academic.append(hr);
    var table=document.createElement("table");
    //table.border="1";;
    academic.append(table);
    var tr2="<tr><th>Qualification</th><th>Institute</th><th>YOP</th><th>Percentage</th></tr>";
    var tr1=" ";
    for(var i=0;i<e1.length;i++){
      tr1=tr1+"<tr><td>"+e1[i].Qualification+"</td><td>"+e1[i].Institute+"</td><td>"+e1[i].YOP+"</td><td>"+e1[i].Percentage+"</td></tr>";
    }
    table.innerHTML=tr2+tr1;
    academic.append(table);
  }

  function skills(s){
    var h1=document.createElement("h1");
    h1.textContent="skills";
    academic.append(h1);
    var hr=document.createElement("hr");
    academic.append(hr);
    var ul=document.createElement("ul");
    for(var i in s){
      var li=document.createElement("li");
      li.innerHTML=s[i].name+" :"+s[i].info;
      ul.append(li);
      }
    academic.append(ul);
  }
