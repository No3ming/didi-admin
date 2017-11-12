/**
 * Created by ldm on 2017/11/1.
 */
import service from './service'

const api = {
  registered (payload) {
    return service.post('/accountant/register', payload)
  },
  login (payload) {
    return service.post('/accountant/login', payload)
  },
  getRobOrder (payload) {
    return service.post('/accountant/robOrder', payload)
  },
  getProgress (payload) {
    return service.post('/accountant/progress', payload)
  },
  getComplete (payload) {
    return service.post('/accountant/complete', payload)
  },
  getRobOrdering (payload) {
    return service.post('/accountant/robOrdering', payload)
  },
  robOrdering (payload) {
    return service.post('/accountant/robOrdering', payload)
  },
  schedule (payload) {
    return service.post('/accountant/schedule', payload)
  },
  postProgress (payload) {
    return service.post('/accountant/postProgress', payload)
  }
}

export default api
