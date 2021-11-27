// try {
//     console.log("start");
//     console.log(value);
//     console.log("end");
// } catch (e) {
//     console.log('Ошибка');

// }

// try{

// console.log("start");

// setTimeout(() => {try {
//   console.log(value);}
//   catch (e) {console.log('error')}
// }, 3000);
// console.log("end");
// } catch (e) {
//     console.log('произошла ошибка');
// }

// const a = 10;
// try{
// try {
//   if (a === 10) {
//     throw new Error("my custom error");
//   }
//   } catch (e) {
//     if (e.name ==='Error') {
//   console.log(e.name, e.message)
// } else {
//     throw new Error("обработали ошибку")
// }
// }
// } catch (e) {
//     console.log(e.message);
// }

const baseUrl = "https://reqres.in/api";
const getResponseData = (data) => {
  console.log(data, "done");
  const element = document.createElement('div')

  element.style.backgroundColor = 'green'
  element.style.fontSize = '40px'
  element.innerHTML =`Пользователь с id =${data.id}, создан в ;{data.id}`
  document.body.appendChild(element)
};
getResponseData(545)
// const getRequest = (page, callback) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", `${baseUrl}/users?page=${page}`);

//   xhr.send();
//   xhr.responseType = "json"

//   xhr.onload = function () {
//       callback(xhr.response.data)
//   }
// };
// getRequest(1,getResponseData);

// const postRequest = (body, callback) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", `${baseUrl}/users`);

//   xhr.send(JSON.stringify(body));

//   xhr.onload = function () {
//     callback(xhr.response);

//   };
// };
// postRequest({name:'Neo', job: 'Man'}, getResponseData);

const getRequest = async (page) => {
  try {
    const res = await fetch(`${baseUrl}/users?page=${page}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
getRequest(1);

const postRequest = async (body) => {
  const res = await fetch(`${baseUrl}/users`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  const data = await res.json();
  getResponseData(data);
};
postRequest({ name: "Neo", job: "men" });
