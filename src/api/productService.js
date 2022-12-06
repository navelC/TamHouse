import { instance } from "./base";

export async function Get() {
  return await instance.get(`v1/products`)
}
export async function GetById(id) {
  return await instance.get(`v1/products/`+id)
}
export async function GetTopProduct() {
  return await instance.get(`v1/products?top=true`)
}
export async function GetByCategory(cate, limit) {
  return await instance.get(`v1/products?category=`+cate+`&limit=`+limit)
}