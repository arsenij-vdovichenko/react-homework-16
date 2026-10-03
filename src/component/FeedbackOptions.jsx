function FeedbackOptions({handleGood, handleNeutral, handleBad}){
    return (
        <>
        <button type='button' onClick={handleGood}>Good</button>
      <button type='button' onClick={handleNeutral}>Neutral</button>
      <button type='button' onClick={handleBad}>Bad</button>
      </>
    )
}

export default FeedbackOptions