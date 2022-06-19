import { API } from '../backend'
export const signup = (user) => {
  return fetch(`${API}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}
export const signin = (user) => {
  console.log('Inside signin')
  return fetch(`${API}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}

export const authenticate = (data, next) => {
  console.log('Inside authenticate')
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    next()
  }
}
export const isAutheticated = () => {
  if (typeof window == 'undefined') {
    return false
  }
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'))
  } else {
    return false
  }
}

export const isSignedIn = () => {
	if(typeof window === undefined) {
		return false;
	}
	if(!window.localStorage.getItem("user")) return false
	const data = JSON.parse(window.localStorage.getItem("user"));
	if(data.length == 0) return false;
	return true;
}

export const signout = (next) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt')
    next()

    return fetch(`${API}/signout`, {
      method: 'GET'
    })
      .then((response) => console.log('signout success'))
      .catch((err) => console.log(err))
  }
}

export const addProduct = (data) => {
  const id = data._id
  let mydata = {}
  mydata.meal = data

  delete mydata.meal._id

  console.log(id)
  console.log('Add addProduct', mydata)

  return fetch(`${API}/meal/${id}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(mydata)
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}

export const getAllProducts = (username) => {
  return fetch(`${API}/meals/?username=${username}`, { method: 'GET' })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}


export const getUserLimit = (id) => {
  console.log('User limit ', id)
  return fetch(`${API}/user/checklimit/${id}`, { method: 'GET' })
    .then((res) => {
      if (res.status >= 400 && res.status < 500) {
        console.log('No limit')
      }
      console.log('getUserLimit', res)
      return res.json()
    })
    .catch((err) => console.log(err))
}
export const removeItemFromCart = productId => {
    return fetch(`${API}/meal/${productId}`, { method: "DELETE" })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
}; 

export const getProducts = (username, filter) => {
  //console.log(username, filter, "ALlPRODUCT********************************")
  return fetch(`${API}/meals/?username=${username}&filter=${filter}`, {
    method: 'GET'
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.log(err))
}


export const SaveCalorieLimit = (limit, user) => {
  return fetch(`${API}/user/update-calorie`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ limit, user })
  })
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .catch((err) => console.log(err))
}