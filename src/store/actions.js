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
