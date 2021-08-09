import {ref} from 'vue'

const nowDate = ref('0000-00-00')
const getNowDate = () => {
  const d = new Date()
  const yy = d.getFullYear()
  let mm = d.getMonth()+1
  mm = mm < 10 ? '0' + mm : mm
  const dd = d.getDate()<10?'0'+d.getDate():d.getDate()
  nowDate.value = `${yy}-${mm}-${dd}`
}

export {nowDate,getNowDate}