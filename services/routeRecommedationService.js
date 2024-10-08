import { BASE_URL } from '../constants/apiEndpoints';
import { calculateDistance, calculateCost, calculateTime } from '../utils/calculateDistance';

export const generateRoutes = async (start, end) => {
    const response = await axios.get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&mode=transit&key=${BASE_URL}&alternatives=true`
    );
    console.log(response.data);

    const metroStations = [
        { name: "Aluva", lat: 10.1099872, lng: 76.3495149 },
        { name: "Pulinchodu", lat: 10.0951, lng: 76.3466 },
        { name: "Companypady", lat: 10.0873, lng: 76.3428 },
        { name: "Ambattukavu", lat: 10.0792806, lng: 76.3388894 },
        { name: "Muttom", lat: 10.0727011, lng: 76.33375 },
        { name: "Kalamassery", lat: 10.0630188, lng: 76.3279715 },
        { name: "CUSAT", lat: 10.0468491, lng: 76.3182738 },
        { name: "Pathadipalam", lat: 10.0361, lng: 76.3144 },
        { name: "Edapally", lat: 10.025263, lng: 76.3083641 },
        { name: "Changampuzha Park", lat: 10.0152041, lng: 76.3023872 },
        { name: "Palarivattom", lat: 10.0063373, lng: 76.3048456 },
        { name: "JLN Stadium", lat: 10.0003003, lng: 76.2991852 },
        { name: "Kaloor", lat: 9.9943, lng: 76.2914 },
        { name: "Town Hall", lat: 9.9914, lng: 76.2884 },
        { name: "MG Road", lat: 9.983496, lng: 76.282263 },
        { name: "Maharaja’s College", lat: 9.9732357, lng: 76.2850733 },
        { name: "Ernakulam South", lat: 9.9685, lng: 76.2893 },
        { name: "Kadavanthra", lat: 9.966593, lng: 76.298074 },
        { name: "Elamkulam", lat: 9.9672125, lng: 76.3086071 },
        { name: "Vyttila", lat: 9.9673739, lng: 76.3204215 },
        { name: "Thaikoodam", lat: 9.960079, lng: 76.323483 },
        { name: "Pettah", lat: 9.9525568, lng: 76.3300456 },
        { name: "Vadakkekotta", lat: 9.952771, lng: 76.339277 },
        { name: "SN Junction", lat: 9.954662, lng: 76.345919 },
        { name: "Thrippunithura", lat: 9.9504507, lng: 76.3517069 },
      ];

      const findNearestMetroStation = (coordinates) => {
        let minDistance = Number.MAX_VALUE;
        let nearestStation = null;
        console.log(metroStations);
        metroStations.forEach((station) => {
          const distance = calculateDistance(coordinates, station);
          if (distance < minDistance) {
            minDistance = distance;
            nearestStation = station;
          }
        });
    
        return nearestStation;
      };

      const nearestMetroToOrigin = findNearestMetroStation(start);
      const nearestMetroToDestination = findNearestMetroStation(
        end
      );

      const originToMetroResponse = await axios.get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${nearestMetroToOrigin.lat},${nearestMetroToOrigin.lng}&key=${API_KEY}&mode=transit&alternatives=true`
      );
      const metroToDestinationResponse = await axios.get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${nearestMetroToDestination.lat},${nearestMetroToDestination.lng}&destination=${destination}&key=${API_KEY}&mode=transit&alternatives=true`
      );

      
};

export const addPointsOfInterest = (route, points) => {
    // Add points of interest to the route
};

export const fetchWeatherAlerts = (route) => {
    // Fetch weather alerts for the route
};


