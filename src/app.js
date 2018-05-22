console.log("app.js is running");

var app = {
  title:'Indecision App',
  subtitle:'Put your life into the hands of a computer.',
  options:['One','Two','Three']
}


var template = (
<div>
  <h1>{app.title}</h1>
  {app.subtitle && <p>{app.subtitle}</p>}
  <p>{app.options.length>0?'Here are your options':'No options'}</p>
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
  </ol>
</div>
);

var user = {
  name:'akash',
  age: 19,
  location:'India'
}

function getLocation(location) {
  if(location) return <p>Location: {location}</p>;
}

var templateTwo = (
  <div>
    <h1>{user.name?user.name:'Anonymos'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);
