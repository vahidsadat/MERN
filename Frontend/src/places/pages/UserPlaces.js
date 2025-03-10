import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {id : 'p1',
    title : 'Pyramid',
    description : ' One of the greatest buildings in the history',
    imageURL : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pyramids_of_the_Giza_Necropolis.jpg/2560px-Pyramids_of_the_Giza_Necropolis.jpg',
    address : 'Cairo',
    coordinates : {
        lat: 29.9792458,
        lng: 31.1343
         },
         creator : 'u1'
    },
    {id : 'p2',
    title : 'Pyramid2',
    description : ' One of the greatest buildings in the history2',
    imageURL : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pyramids_of_the_Giza_Necropolis.jpg/2560px-Pyramids_of_the_Giza_Necropolis.jpg',
    address : 'Cairo',
    coordinates : {
        lat: 19.9792458,
        lng: 21.1343
    },
    creator : 'u2'
}
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;