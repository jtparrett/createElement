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

    <Query title="Test" />
  </div>
)

document.getElementById('root').appendChild(<App />)
