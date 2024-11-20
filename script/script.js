let countrySelect = document.querySelector('.countrySelect')
let citySelect = document.querySelector('.citySelect')
let cityObj = {
    Iran : ['Tehran', 'Tabriz', 'Ilam', 'Shiraz', "Esfahan"],
    Canada : ['Vancouver', 'Toronto', 'Calgary', 'Ottawa', "Edmonton"],
    England : ['London', 'Westminster', 'Birmingham', 'Manchester', "Sheffield"]
}

countrySelect.addEventListener('change', function(){
    switch(countrySelect.value){
        case 'Iran':
            updateCityOption(cityObj['Iran'])
        break
        case 'Canada':
            updateCityOption(cityObj['Canada'])
        break
        case 'England':
            updateCityOption(cityObj['England'])
        break
    }
})

function updateCityOption(cities){
    citySelect.textContent = '<option value="">Select City ...</option>'
    cities.forEach(function(city){
        let option = document.createElement('option')
        option.value = city
        option.innerHTML = city
        citySelect.appendChild(option);
    }); 
}