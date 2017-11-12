/**
 * Created by ldm on 2017/11/1.
 */
export const direction = state => state.direction

export const token = state => state.token || window.sessionStorage.getItem('token') || ''

export const transitionName = state => state.transitionName

export const serviceList = state => state.serviceList

export const address = state => state.address

export const serveCityId = state => state.serveCityId

export const certificateImgs = state => state.certificateImgs

export const workingExperienceImgs = state => state.workingExperienceImgs

export const workingExperience = state => state.workingExperience

export const realname = state => state.realname

export const phone = state => state.phone

export const password = state => state.password

export const nowOrder = state => state.nowOrder

export const progressTotal = state => state.progressTotal

export const completedTotal = state => state.completedTotal
