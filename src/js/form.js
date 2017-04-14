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
