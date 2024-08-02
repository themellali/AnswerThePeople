import { useParams } from "react-router-dom"

const KeywordDetails = () => {
  const {type}=useParams()
  return (
    <div>
        <h1>{type}</h1>
    </div>
  )
}

export default KeywordDetails