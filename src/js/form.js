window.handlers = {};

// service form handlers
window.handlers.service = function (data, successCallback, errorCallback) {
    console.log("service handler", data);
    successCallback();
};

// service form handlers
window.handlers.price = function (data, successCallback, errorCallback) {
    console.log("price handler", data);
    successCallback();
};

//souvenirs form handlers
window.handlers.discount = function (data, successCallback, errorCallback) {
    console.log("discount handler", data);
    successCallback();
};

//promo form handlers
window.handlers.promo = function (data, successCallback, errorCallback) {
    console.log("promo handler", data);
    successCallback();
};
