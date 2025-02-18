export const selectBudgetOptions = [
    {
        "id": 1,
        "label": "Ultra Budget",
        "description": "Backpacker-friendly, hostels & budget stays",
        "range": "Under $20 per day",
        "icon": "🎒"
    },
    {
        "id": 2,
        "label": "Budget",
        "description": "Affordable hotels, guesthouses & public transport",
        "range": "$20 - $50 per day",
        "icon": "💰"
    },
    {
        "id": 3,
        "label": "Mid-Range",
        "description": "3-star hotels, rental cars, casual dining",
        "range": "$50 - $150 per day",
        "icon": "🏨"
    },
    {
        "id": 4,
        "label": "Luxury",
        "description": "4-star hotels, private transport, fine dining",
        "range": "$150 - $500 per day",
        "icon": "✨"
    },
    {
        "id": 5,
        "label": "Ultra Luxury",
        "description": "5-star resorts, private tours, premium experiences",
        "range": "Above $500 per day",
        "icon": "👑"
    }
]

export const selectTravelCompanionOptions = [
    {
        "id": 1,
        "label": "Solo",
        "description": "Enjoy a personal adventure at your own pace.",
        "icon": "🧍"
    },
    {
        "id": 2,
        "label": "Couple",
        "description": "Romantic getaways for you and your partner.",
        "icon": "💑"
    },
    {
        "id": 3,
        "label": "Family",
        "description": "Fun-filled trips with kids and loved ones.",
        "icon": "👨‍👩‍👧‍👦"
    },
    {
        "id": 4,
        "label": "Friends",
        "description": "Group adventures with your best buddies.",
        "icon": "🧑‍🤝‍🧑"
    },
    {
        "id": 5,
        "label": "Colleagues",
        "description": "Work retreats or business trips made fun.",
        "icon": "👔"
    },
    {
        "id": 6,
        "label": "Other",
        "description": "Custom travel plans for special occasions.",
        "icon": "🌍"
    }
]

// const JSON_FORMAT = {
//     "destination": "Las Vegas, NV",
//     "duration_days": 1,
//     "travelers": 2,
//     "budget": "Luxury",
//     "accomodation": [
//         {
//             "name": "The Venetian Resort Las Vegas",
//             "address": "3355 S Las Vegas Blvd, Las Vegas, NV 89109",
//             "price_per_night": "$350",
//             "rating": 5,
//             "price": '$200/night',
//             "reviews": 9500,
//             "description": "An opulent resort featuring spacious suites, a world-class casino, and the Grand Canal Shoppes.",
//             "amenities": [
//                 "Spa",
//                 "Multiple fine-dining restaurants",
//                 "Luxury shopping",
//                 "Pool complex"
//             ],
//             "image_url": "https://www.venetianlasvegas.com/content/dam/venetian/general/overview/venetian-exterior.jpg",
//             "geo_coordinates": {
//                 "latitude": 36.1215,
//                 "longitude": -115.1698
//             }
//         },
//         {
//             "name": "The Venetian Resort Las Vegas",
//             "address": "3355 S Las Vegas Blvd, Las Vegas, NV 89109",
//             "price_per_night": "$350",
//             "rating": 5,
//             "price": '$400/night',
//             "reviews": 9500,
//             "description": "An opulent resort featuring spacious suites, a world-class casino, and the Grand Canal Shoppes.",
//             "amenities": [
//                 "Spa",
//                 "Multiple fine-dining restaurants",
//                 "Luxury shopping",
//                 "Pool complex"
//             ],
//             "image_url": "https://www.venetianlasvegas.com/content/dam/venetian/general/overview/venetian-exterior.jpg",
//             "geo_coordinates": {
//                 "latitude": 36.1215,
//                 "longitude": -115.1698
//             }
//         }
//     ],
//     "itinerary": [
//         {
//             "day": 1,
//             "activities": [
//                 {
//                     "name": "Breakfast at Mon Ami Gabi",
//                     "address": "3655 S Las Vegas Blvd, Las Vegas, NV 89109",
//                     "best_time_to_visit": "8:30 AM",
//                     "description": "A French bistro offering a delicious breakfast with a view of the Bellagio fountains.",
//                     "image_url": "https://www.monamigabi.com/wp-content/uploads/2020/08/Mon-Ami-Gabi.jpg",
//                     "geo_coordinates": {
//                         "latitude": 36.1126,
//                         "longitude": -115.1728
//                     },
//                     "ticket_price": "Approximately $50 per person",
//                     "travel_time_from_hotel": "5 minutes"
//                 },
//                 {
//                     "name": "Helicopter Tour of the Grand Canyon",
//                     "address": "6075 S Las Vegas Blvd, Las Vegas, NV 89119",
//                     "best_time_to_visit": "10:00 AM",
//                     "description": "A breathtaking aerial view of the Grand Canyon with luxury seating.",
//                     "image_url": "https://www.papillon.com/images/tours/grand-canyon-helicopter-tour.jpg",
//                     "geo_coordinates": {
//                         "latitude": 36.0806,
//                         "longitude": -115.1522
//                     },
//                     "ticket_price": "$450 per person",
//                     "travel_time_from_hotel": "20 minutes"
//                 },
//                 {
//                     "name": "Lunch at Joël Robuchon",
//                     "address": "3799 S Las Vegas Blvd, Las Vegas, NV 89109",
//                     "best_time_to_visit": "1:00 PM",
//                     "description": "Savor exquisite French cuisine at this Michelin three-star restaurant.",
//                     "image_url": "https://www.mgmgrand.com/content/dam/MGM/mgm-grand/dining/fine-dining/joel-robuchon/joel-robuchon-interior.jpg",
//                     "geo_coordinates": {
//                         "latitude": 36.1023,
//                         "longitude": -115.1698
//                     },
//                     "ticket_price": "Approximately $250 per person",
//                     "travel_time_from_hotel": "15 minutes"
//                 },
//                 {
//                     "name": "Afternoon at The Venetian’s Grand Canal Shoppes",
//                     "address": "3377 S Las Vegas Blvd, Las Vegas, NV 89109",
//                     "best_time_to_visit": "3:00 PM",
//                     "description": "Luxury shopping, gondola rides, and designer stores inside The Venetian.",
//                     "image_url": "https://www.grandcanalshoppes.com/-/media/Project/MGP/GrandCanalShoppes/Photography/gondola.jpg",
//                     "geo_coordinates": {
//                         "latitude": 36.1215,
//                         "longitude": -115.1698
//                     },
//                     "ticket_price": "Varies by purchase",
//                     "travel_time_from_hotel": "0 minutes"
//                 },
//                 {
//                     "name": "Dinner at SW Steakhouse",
//                     "address": "3131 S Las Vegas Blvd, Las Vegas, NV 89109",
//                     "best_time_to_visit": "7:00 PM",
//                     "description": "Dine on premium steaks with a view of the Lake of Dreams.",
//                     "image_url": "https://www.wynnlasvegas.com/content/dam/wynn/venues/dining/sw-steakhouse/sw-steakhouse-dining-room.jpg",
//                     "geo_coordinates": {
//                         "latitude": 36.1279,
//                         "longitude": -115.1674
//                     },
//                     "ticket_price": "Approximately $200 per person",
//                     "travel_time_from_hotel": "5 minutes"
//                 },
//                 {
//                     "name": "Cirque du Soleil's 'O' Show",
//                     "address": "3600 S Las Vegas Blvd, Las Vegas, NV 89109",
//                     "best_time_to_visit": "9:30 PM",
//                     "description": "Experience the breathtaking aquatic performance by Cirque du Soleil.",
//                     "image_url": "https://www.cirquedusoleil.com/-/media/cds/o/o-show.jpg",
//                     "geo_coordinates": {
//                         "latitude": 36.1126,
//                         "longitude": -115.1767
//                     },
//                     "ticket_price": "$180 per person",
//                     "travel_time_from_hotel": "10 minutes"
//                 }
//             ]
//         }
//     ]
// }

// export const AI_PROMPT = `Generate a travel plan for the location: {destination} for {totalDays} days with {companion}, within a {budget} budget. Each location should be planned for a {totalDays} days visit, with a daily itinerary including the best time to visit, rating of hotels, address of hotels formatted in JSON with given ${JSON_FORMAT} format`


export const AI_PROMPT = `
Generate a travel plan for the location: {destination} for {totalDays} days with {companion}, within a {budget} budget. 
The response MUST strictly follow this JSON format:

Example:
{
  "destination": "Paris",
  "duration_days": 3,
  "travelers": 2,
  "budget": "Luxury",
  "accomodation": [
    {
      "name": "Ritz Paris",
      "address": "15 Place Vendôme, 75001 Paris, France",
      "price_per_night": "$600",
      "rating": 5,
      "reviews": 4000,
      "description": "A luxurious hotel in the heart of Paris with Michelin-star dining and a full-service spa.",
      "amenities": ["Spa", "Fine Dining", "Historic Architecture"],
      "image_url": "https://www.ritzparis.com/img/hotel.jpg",
      "geo_coordinates": {
        "latitude": 48.8688,
        "longitude": 2.3286
      }
    }
  ],
  "itinerary": [
    {
      "day": 1,
      "activities": [
        {
          "name": "Visit Eiffel Tower",
          "address": "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
          "best_time_to_visit": "10:00 AM",
          "description": "A famous landmark offering panoramic views of Paris.",
          "ticket_price": "$25 per person",
          "geo_coordinates": {
            "latitude": 48.8584,
            "longitude": 2.2945
          }
        }
      ]
    }
  ]
}

Now generate a JSON response for **{destination}** in the same format.
`;
