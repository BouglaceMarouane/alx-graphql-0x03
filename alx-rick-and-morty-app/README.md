## Episode Query – ALX GraphQL Project

Objective

This task demonstrates how to use GraphQL to fetch the details of a specific episode from the Rick and Morty GraphQL API using its ID.

## Project Structure

episode/
│── README.md
│── episode-page-1.graphql
│── characters-page-1-output.json
│── characters-page-2.graphql
│── characters-page-2-output.json
│── characters-page-3.graphql
│── characters-page-3-output.json
│── characters-page-4.graphql
│── characters-page-4-output.json

## Setup & Usage

## Clone the Repository

git clone https://github.com/<your-username>/alx-graphql-0x00.git
cd alx-graphql-0x00/episode

## Open the GraphQL Playground

You can run and test this query using the Rick and Morty GraphQL API:

GraphQL Endpoint:

https://rickandmortyapi.com/graphql

## Run the Episode Query

Open the file episode-page-1.graphql and paste the following:

query GetEpisodeById {
  episode(id: 1) {
    id
    name
    air_date
    episode
  }
}

## Note:

Replace 1 with the desired episode ID to fetch other episodes.

## Expected Output

Example output for id: 1:

{
  "data": {
    "episode": {
      "id": "1",
      "name": "Pilot",
      "air_date": "December 2, 2013",
      "episode": "S01E01"
    }
  }
}

## Key Learnings

How to structure a GraphQL query with variables.

Using episode(id: ID!) to fetch specific episode details.

Testing GraphQL queries in GraphQL Playground.

## License

This project is part of the ALX Software Engineering Program and is for learning purposes.