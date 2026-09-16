const searchButton = document.getElementById("searchButton");

const propertyStatus = document.getElementById("propertyStatus");
const propertyType = document.getElementById("propertyType");
const propertyLocation = document.getElementById("propertyLocation");
const propertyPrice = document.getElementById("propertyPrice");
const propertyArea = document.getElementById("propertyArea");

const propertyCards = document.querySelectorAll(".property-card");

const resetButton = document.getElementById("resetButton");
const noResults = document.getElementById("noResults");


searchButton.addEventListener("click", function() {

    let foundProperty = false;

    propertyCards.forEach(function(card) {

        const status = card.dataset.status;
        const type = card.dataset.type;
        const location = card.dataset.location;
        const price = card.dataset.price;
        const area = card.dataset.area;

        const statusMatch =
            propertyStatus.value === "بيع أو إيجار" ||
            propertyStatus.value === status;

        const typeMatch =
            propertyType.value === "نوع العقار" ||
            propertyType.value === type;

        const locationMatch =
            propertyLocation.value === "المنطقة" ||
            propertyLocation.value === location;

        const priceMatch =
            propertyPrice.value === "السعر" ||
            propertyPrice.value === price;

        const areaMatch =
            propertyArea.value === "المساحة" ||
            propertyArea.value === area;


        if (statusMatch && typeMatch && locationMatch && priceMatch && areaMatch) {

            card.style.display = "block";
            foundProperty = true;

        } else {

            card.style.display = "none";

        }

    });


    if (foundProperty) {
        noResults.style.display = "none";
    } else {
        noResults.style.display = "block";
    }

});


resetButton.addEventListener("click", function() {

    propertyStatus.value = "بيع أو إيجار";
    propertyType.value = "نوع العقار";
    propertyLocation.value = "المنطقة";
    propertyPrice.value = "السعر";
    propertyArea.value = "المساحة";


    propertyCards.forEach(function(card) {
        card.style.display = "block";
    });


    noResults.style.display = "none";

});

function openPropertyDetails(propertyId) {
    window.location.href = "property-details.html?id=" + propertyId;
}