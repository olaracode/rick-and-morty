import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import Home from "./views/Home";
import Nav from "./components/Nav";
import Character from "./views/Character";
import Episodes from "./views/Episodes";
import Details from "./views/Details";
import EpisodeDetail from "./views/EpisodeDetail";
import Search from "./views/Search";
import NotFound from "./views/NotFound";
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const basename = process.env.BASENAME || "rick-and-morty";
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router basename={basename}>
          <Nav />
          <Routes>
            <Route path="/rick-and-morty" element={<Home />} />
            <Route path="/rick-and-morty/characters" element={<Character />} />
            <Route path="/rick-and-morty/episodes" element={<Episodes />} />
            <Route
              path="/rick-and-morty/episode/:id"
              element={<EpisodeDetail />}
            />
            <Route path="/rick-and-morty/character/:id" element={<Details />} />
            <Route path="/rick-and-morty/search/:input" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
