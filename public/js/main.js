const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) =>{
    event.preventDefault();
    let cityVal = cityName.value; 
    if(cityVal === ""){
         city_name.innerText = `Please write the name before Search`;
         datahide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=75110bcd0f73143fc905d785d211265a`;
             const response = await  fetch(url);
             const data = response.json();
             const arrData = [data];
             city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
             temp.innerText = arrData[0].main.temp;    

             const tempMood = arrData[0].weather[0].main;

            if(tempMood === "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }else if(tempMood === "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }else if(tempMood == "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }else{
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
         datahide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText = `please enter the city name properly`;
         datahide.classList.add('data_hide');
        }
    }

}
submitBtn.addEventListener('click', getInfo);