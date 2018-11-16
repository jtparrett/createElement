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
    {(parent) => {
     
      const onClick = (e) => {
        parent.replaceWith(<Wow text={++state} />)
      }

      return (
        <h1 onClick={onClick}>{text}</h1>
      )
    }}
  </div>
)

const Thing = () => (parent) => {
  const render = (e) => {
    e.target.replaceWith(<Thing />())
  }

  return (
    <h2 onClick={render}>{new Date().getTime()}</h2>
  )
}

const App = () => (
  <div>
    <Wow text={state} />
    <p>Hello world</p>
    <div>
      <Thing />

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
