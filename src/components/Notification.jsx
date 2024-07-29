import { useEffect } from 'react'
import { useNotificationValue } from '../AnecdoteContext'
import { useNotificationDispatch } from '../AnecdoteContext'

const Notification = () => {
  const notification = useNotificationValue()
  const dispatch = useNotificationDispatch()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  }

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch({ type: 'CLEAR_NOTIFICATION' })
      }, 5000)
      return () => clearTimeout(timer)
    }
  })

  if (notification) {
    return <div style={style}>{notification}</div>
  }
  return null
}

export default Notification
