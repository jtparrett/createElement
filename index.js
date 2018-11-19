import createElement from './createElement'

const Data = ({data = []}) => (
  <div>
    {data.map((_, i) => (
      <p>{i}</p>
    ))}
  </div>
)

const Query = ({title}) => (
  <div>
    {(data = [], setData) => {
      setTimeout(() => {
        setData([1, 2, 3])
      }, 3000)

      if(data.length <= 0){
        return (<p>Loading...</p>)
      }

      return (<Data data={data} />)
    }}
  </div>
)


const Wow = ({count}) => (
  <div>
    {(state = {count}, setState) => {     
      const onClick = (e) => {
        setState({
          count: ++count
        })
      }

      return (
        <h1 onClick={onClick}>{state.count}</h1>
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
    <Wow count={0} />
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
