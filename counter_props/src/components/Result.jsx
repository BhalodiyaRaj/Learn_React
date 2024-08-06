import propTypes from 'prop-types'

const Result = ({numbers = 5}) => {

    const numArrays = Array.from({ length: numbers }, (_,index) => index+1);
  return (
    <div>
        <ul>
            {numArrays.map((number) => (
                <li key={number}>{number}</li>
            ))}
        </ul>
    </div>
  )
}

Result.propTypes = {
  numbers: propTypes.number.isRequired,
}

export default Result;