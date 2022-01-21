import { gql } from "@apollo/client";

export const GET_EPISODES = (page: number) => gql`
query getEpisodes {
  episodes (page: ${page}){
    results {
      name, episode, id
    },
    info {
      pages
    }
  }
}
`;

export const GET_EPISODE_DETAILS = (id: string) => gql`
  query getEpisodeDetail {
    episode (id: ${id}){
        name, episode, characters{
            name, image, id
        }
    }
  }
`;

export const GET_CHARACTERS = (page: number) => gql`
  query getCharacters {
    characters (page: ${page}){
      results {
        name
        image
        id
      },
      info {
        pages
      }
    }
  }
`;
export const GET_CHARACTER = (id: number) => gql`
    query getCharacter {
        character(id: ${id}){
            id,
            name,
            species,
            image,
            origin{
                name
            },
            location{
                name
            },
            status
        }
    }
`;

export const GET_CHARACTER_DETAIL = (id: string) => gql`
  query getCharacterDetail {
    character (id: ${id}){
      name, status, species, location{ name }, origin{ name }, image, episode{name, episode, id}
    }
  }
`;

export const GET_SEARCH = (page: number, name: string) => gql`
  query getSearch {
    characters(page: ${page}, filter: {name: "${name}"}) {
        results {
          name
        }
        info {
          pages
        }
      }  
    }
`;
