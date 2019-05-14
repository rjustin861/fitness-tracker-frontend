export default class GeoHelperService {
    getCoordinates() {
        return new Promise(function(resolve, reject) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    resolve({lat: position.coords.latitude, long: position.coords.longitude});
                });
            }
        });
    }
}