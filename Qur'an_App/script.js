let allsuraNames = document.querySelector(".sura-lists");

// getting all sura from the API
let getsuraNames = () => {
  let url = "http://api.alquran.cloud/v1/surah";

  //sending request using axio
  axios.get(url)
    .then((response) => {
      const data = response.data.data;
      console.log(data);
      data.map((eachSura => {
        console.log("eachSura", eachSura);
        let suraNumber = eachSura.number;
        let suraName = eachSura.name;
        allsuraNames.innerHTML += `
              <li onclick=handleClick(this.value) class="sura" value="${suraNumber}">${suraName}</li>
     `;
      }));
    })
    .catch((error) => {
      alert(error);
    });
}
window.addEventListener("load", getsuraNames);

let handleClick = (value) => {
  console.log("the value...");
  window.location.href = "showsuura.html";
  let suraNumber = value;
  localStorage.setItem("apiResponse", JSON.stringify(suraNumber));
};
