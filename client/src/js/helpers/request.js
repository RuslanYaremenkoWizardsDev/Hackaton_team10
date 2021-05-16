export const URL = `https://web-application-grading.herokuapp.com/`;

export const getRequest = async (url, options={method: 'GET'}) => {
  const answer = await fetch(url, options);
  console.log(answer);
  return answer.json();
};
export const postRequest = async (url, options) => {
  const answer = await fetch(url, options);
  const kek = await answer.json();
  return {body: kek, status: answer.status}

};
export const putRequest = async (url, options) => {
  const answer = await fetch(url, options);
  return answer.json();
};
export const deleteRequest = async (url, options) => {
  const answer = await fetch(url, options);
  return answer.json();
};
