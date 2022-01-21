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
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Character />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/episode/:id" element={<EpisodeDetail />} />
            <Route path="/character/:id" element={<Details />} />
            <Route path="/search/:input" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
