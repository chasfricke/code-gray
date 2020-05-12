const ResultsCount = ({ indexOfFirstPost, indexOfLastPost, total }) => {
  let message;
  if ((total - indexOfFirstPost) < 10) {
    message = `${indexOfFirstPost + 1} - ${total} of ${total}`

  } else {
    message = `${indexOfFirstPost + 1} - ${indexOfLastPost} of ${total}`
  }
  return message;
}

export default ResultsCount;
