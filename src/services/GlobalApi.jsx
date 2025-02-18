import axios from "axios";

const BASE_URL = 'https://us1.locationiq.com/v1/search';

const config = {
    headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
        'X-Goog-FieldMask': [
            'places.photos',
            'places.displayName',
            'places.id'
        ]
    }
}

export const getPlaceDetails = (query) => {
    const response = axios.post(BASE_URL + '?key=' + import.meta.env.VITE_LOCATIONIQ_API_KEY + '&query=' + query);

}