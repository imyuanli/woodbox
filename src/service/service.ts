import request from "@/service/request";

const token = "uLZ0RC7ZaTwjB0GV"
const BASE_URL = 'https://v2.alapi.cn'

export async function get_dog_message(payload?: any) {
    return request.post(BASE_URL + `/api/dog`, {token})
}
