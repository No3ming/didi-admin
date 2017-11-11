/**
 * Created by ldm on 2017/11/1.
 */
import service from './service'

const api = {
  registered (payload) {
    return service.post('/accountant/register', payload)
  },
  login (payload) {
    return service.post('accountant/login', payload)
  }
}

export default api
