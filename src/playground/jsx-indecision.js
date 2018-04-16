

// JSX - JavaScript XML

// const aO = {
//     title: "DarkPlaces",
//     subtitle: "GillianFlynn",
//     options:['one']
// };


// const temp1 = (
//     <div>
//         <h1>{aO.title}</h1>
//         <h2>{aO.subtitle?'by '+aO.subtitle:'by Unknown'}</h2>
//        {aO.options.length>0 && <p>Options are available</p>}
//     </div>
// );


// const mul={
//     numbers:[2,3,7,12],
//     mBy:21,
//     multiply(){
//        return this.numbers.map((x)=>x*this.mBy);
//     }
// };
// console.log(mul.multiply());

const aO = {

    options: []
};

const formSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        aO.options.push(option);
        e.target.elements.option.value = '';
        renderDOM();
    }
};
function removeAll() {
    aO.options.length = 0;

    renderDOM();
}

const appRoot = document.getElementById('app');

renderDOM();

function renderDOM() {
    const temp2 = (
        <div>
            <h1>Indecision App</h1>
            <p>Put your life etc etc...</p>
            <p>{aO.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    aO.options.map((value, i) => {
                        return <li>{value}</li>
                    })
                }
            </ol>
            <form onSubmit={formSubmit}>
                <input type="text" name="option" autoComplete="off" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(temp2, appRoot);
}
