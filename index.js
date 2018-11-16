import createElement from './createElement'

const Data = ({data = []}) => (
  <div>
    {data.map((_, i) => (
      <p>{i}</p>
    ))}
  </div>
)

const Query = () => (
  <div>
    {(node) => {
      setTimeout(() => {
        node.replaceWith(<Data data={[1, 2, 3]} />)
      }, 3000)

      return (<p>Loading...</p>)
    }}
  </div>
)


let state = 0

const Wow = ({text}) => (
  <div>
    {(node) => {
     
      const onClick = (e) => {
        node.replaceWith(<Wow text={++state} />)
      }

      return (
        <h1 onClick={onClick}>{text}</h1>
      )
    }}
  </div>
)

const App = () => (
  <div>
    <Wow text={state} />
    <p>Hello world</p>
    <div>
      <div>
        <h2>Test</h2>
        <h3>This is a h3</h3>
      </div>

      {Array.from(new Array(10)).map((_, i) => (
        <p>{i}</p>
      ))}
    </div>

    <Query title="Test" />
  </div>
)

document.getElementById('root').appendChild(<App />)
