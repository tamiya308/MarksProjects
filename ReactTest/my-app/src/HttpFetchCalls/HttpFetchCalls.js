import React, { Component } from "react";

export default class HttpFetchCalls extends Component {
  state = {
    reactLibraryApi: "https://api.npms.io/v2/search?q=react",
    reactLibraryApiBad: "https://api.npms22.io/v2/search?q=react",
    reactPostEndPoint: "https://reqres.in/api/posts",
    getHeadders: { "Content-Type": "text/plain" },
    postHeaders: {
      "Content-Type": "application/json",
      Authorization: "Bearer my-token",
      "My-Custom-Header": "foobar",
    },
    loadingData: true,
  };

  test() {
    console.log("1. Ready");
    let example = fetch(this.state.reactLibraryApi).then((res) => {
      console.log("2. This is inside the then() block");
    });
    console.log(
      "3. This is after the fetch statement where we are now executing other code that is not async"
    );
  }

  componentDidMount() {
    //Bad then call to simulate not waiting for async
    // this.test();
    // console.log("4. this is after the entire function");

    // Synchronous Http GET
    console.log("here1");
    fetch(this.state.reactLibraryApi, this.state.getHeadders)
      .then((response) => {
        console.log("here2");
        return response.json()})
      .then((x) =>{
        console.log("here3");
        this.setState({
          reactPackagesDescription: x.results[0].package.description,
        })}
      );
    // Async Http GET
    fetch(this.state.reactLibraryApi, this.state.getHeadders)
      .then(async (x) => {
        const data = await x.json();
        
        if (!x.ok) {
          console.error("ERROR : " + x.statusText);
        }
        this.setState({
          reactPackagesDescriptionAsync: data.results[0].package.description,
        });
      })
      .catch((error) => {
        console.error("ERROR : " + error);
      });
    // Failed Http GET (test error handling)
    fetch(this.state.reactLibraryApiBad, this.state.getHeadders)
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        this.setState({ totalReactPackages: data.total });
      })
      .catch((error) => {
        this.setState({ errorMessage: error.toString() });
      })
      .finally(() => {
        this.sleep(1000).then(() => {
          this.setState({ loadingData: false });
        });
      });

    // Http POST
    const requestOptions = {
      method: "POST",
      headers: this.state.postHeaders,
      body: JSON.stringify({ title: "React POST Request Example" }),
    };
    fetch(this.state.reactPostEndPoint, requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));
  }

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  render() {
    let loadingElement;
    if (this.state.loadingData) {
      // loadingElement = <h2>Data is loading...</h2>;
      loadingElement = <div className="loader centered_div" />;
    }

    return (
      <span>
        <div>-{this.state.reactPackagesDescription}</div>
        <div>-{this.state.reactPackagesDescriptionAsync}</div>
        <div style={{ color: "red" }}>{this.state.errorMessage}</div>
        {loadingElement}
      </span>
    );
  }
}
