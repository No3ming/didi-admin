/**
 * Created by ldm on 2017/11/1.
 */
// api showLoading(text)  -> text: string
export const showLoading = ({ commit }) => {
  commit('UPDATE_LOADING', { status: true })
}

export const upServiceList = ({ commit }, serviceList) => {
  commit('UPDATE_SERVICE_LIST', serviceList)
}

export const upAddress = ({ commit }, address) => {
  commit('UPDATE_ADDRESS', address)
}

export const upServeCityId = ({ commit }, serveCityId) => {
  commit('UPDATE_SERVE_CITY_ID', serveCityId)
}

export const upCertificateImgs = ({ commit }, certificateImgs) => {
  commit('UPDATE_CERTIFICATE_IMGS', certificateImgs)
}

export const upWorkingExperienceImgs = ({ commit }, workingExperienceImgs) => {
  commit('UPDATE_WORKING_EXPERIENCE_IMG', workingExperienceImgs)
}

export const upWorkingExperience = ({ commit }, workingExperience) => {
  commit('UPDATE_WORKING_EXPERIENCE', workingExperience)
}

export const upRealname = ({ commit }, realname) => {
  commit('UPDATE_REAL_NAME', realname)
}

export const upPhone = ({ commit }, phone) => {
  commit('UPDATE_PHONE', phone)
}

export const upPassword = ({ commit }, password) => {
  commit('UPDATE_PASSWORD', password)
}
