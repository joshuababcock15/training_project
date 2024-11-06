export const getUsers = async () => {
  return [{
    id: 1,
    name: "John",
    lastname: "Doe",
    email: "test@gmail.com",
    password: "password",
    created_at: "2021-10-10",
    updated_at: "2021-10-10",
    deleted_at: "2021-10-10",
    packageBought: "Ebook",
  }]
}

export const postUsers = async () => {
  return "Posted to users!";
}

export const putUsers = async () => {
  return "Put to users!";
}

export const deleteUsers = async () => {
  return "Deleted users!";
}

export const getUser = async () => {
  return "Got a user!";
}