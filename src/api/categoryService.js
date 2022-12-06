import { instance } from "./base";

export async function Get() {
  return await instance.get(`v1/categories`)
}
export async function GetById(id) {
  return await instance.get(`v1/categories/`+id)
}
