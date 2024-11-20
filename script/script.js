let countrySelect = document.querySelector('.countrySelect')
let citySelect = document.querySelector('.citySelect')
let cityObj = {
    Iran : ['Tehran', 'Tabriz', 'Ilam', 'Shiraz', "Esfahan"],
    Canada : ['Vancouver', 'Toronto', 'Calgary', 'Ottawa', "Edmonton"],
    England : ['London', 'Westminster', 'Birmingham', 'Manchester', "Sheffield"]
}

countrySelect.addEventListener('change', function(){
    let mainCountry = countrySelect.value
    if(mainCountry === 'Please Select'){
        citySelect.innerHTML = '<option value="">Select City ...</option>'
    }
    else{
        updateCityOption(cityObj[mainCountry])
    }
})

function updateCityOption(cities){
    citySelect.innerHTML = ''
    cities.forEach(function(city){
        let option = document.createElement('option')
        option.value = city
        option.innerHTML = city
        citySelect.appendChild(option);
    }); 
}