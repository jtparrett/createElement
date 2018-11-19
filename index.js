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
    {(data, setData) => {
      if(!data){
        setTimeout(() => { // could be an async API call?
          setData([1, 2, 3])
        }, 3000)

        return (<p>Loading...</p>)
      }

      return (
        <div>
          <p>{title}</p>
          <Data data={data} />
        </div>
      )
    }}
  </div>
)


const Wow = ({count}) => (state = {count}, setState) => {     
  const onClick = (e) => {
    setState({
      count: ++count
    })
  }

  return (
    <h1 onClick={onClick}>{state.count}</h1>
  )
}

const Thing = () => (time = 'getting time...', setTime) => {  
  setTimeout(setTime, 2000, new Date().getTime())

  return (
    <h1 style="color: red">{time}</h1>
  )
}

const TopLevelStateComponent = (state, setState) => {
  const onClick = () => {
    setState(!state)
  }

  return (
    <p onClick={onClick}>Top level state {state && 'nice!'}</p>
  )
}

const App = () => (
  <div>
    <Wow count={0} />
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

    {TopLevelStateComponent}

    {(state, setState) => {
      const onClick = () => {
        setState(!state)
      }

      return (
        <p onClick={onClick}>Inline state, how can this be? {state && 'wow!'}</p>
      )
    }}

    <Thing />

    <Query title="Test" />
  </div>
)

document.getElementById('root').appendChild(<App />)
