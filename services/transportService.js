const transportData = {
    stations: [],
    routes: [],
};

export const addStation = (station) => {
    transportData.stations.push(station);
};

export const addRoute = (route) => {
    transportData.routes.push(route);
};

export const getStations = () => transportData.stations;
export const getRoutes = () => transportData.routes;
