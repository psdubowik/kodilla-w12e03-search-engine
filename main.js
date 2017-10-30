var url = "https://restcountries.eu/rest/v2/name/";
var countriesList = $("#countries");

$("#country-name").on("keypress", searchCountries);

function searchCountries(){
    var countryName = $("#country-name").val();
    if (!countryName.length){ 
        countryName = "Poland";
    }
    $.ajax({
        url: url + countryName,
        method: "GET",
        success: showCountriesList
    });
};

function showCountriesList(resp){
    countriesList.empty();
    resp.forEach(function(item){

        var $li = $("<li>").addClass("li-main");
        var lowerCaseCountrySymbol = (item.alpha2Code).toLowerCase();
        var $liSpan = $("<span>").addClass("flag flag-" + lowerCaseCountrySymbol);

        $li.append($liSpan)
            .append(item.name);

        $li.appendTo(countriesList);
    });
};
