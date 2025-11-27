export const queryGetCharacter = `query Character {
    character(id: "4") {
        id
        slug
        name
        culture
        gender
        profession
        status
        eyes_color
        hair_color
        birth_date
        death_date
    }
}`;

export const queryListMachines = `query Machines {
    machines {
        items {
            id
            slug
            name
            path_image
            size
            origin
            machine_class
            strength
            weakness

        }
    }
}`;

export const querySearchAreas = `query Areas {
    areas(search: "la") {
        items {
            id
            slug
            name
            description
            type
            faction
            image_path
            regions
            appears_in
        }
    }
}`;

export const queryCombined = `query Areas {
    areas(search: "la") {
        items {
            id
            slug
            name
            description
            type
            faction
            image_path
            regions
            appears_in
        }
    }
}`;