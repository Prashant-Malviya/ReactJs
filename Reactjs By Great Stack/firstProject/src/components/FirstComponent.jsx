const FirstComponent = ({data,fn}) => {
    // {/* we can do destruturing the file then no need to write  props.data */}
  return (
    <div>
    <button onClick={()=>{fn(10)}}>Set10</button>
      {data}
    </div>
  )
}

export default FirstComponent
