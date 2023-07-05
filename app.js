/* <div id="parent" >
  <div id ="child">
    <h1>I am an H1 Tag</h1>
  </div>
</div> */

const parent = React.createElement('div',{ id:"parent1"},
[React.createElement('div', { id: "child"}, 
[React.createElement('h1',{},"I am a h1 tag"), React.createElement('h2',{},"I am a h2 tag")]),
[React.createElement('div', { id: "child"}, 
[React.createElement('h1',{},"I am a h1 tag"), React.createElement('h2',{},"I am a h2 tag")])]])


  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);


