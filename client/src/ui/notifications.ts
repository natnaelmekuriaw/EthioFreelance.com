import { reactive } from 'vue'

export type NotificationTone = 'success' | 'error' | 'info'

export interface Notification {
  id: number
  message: string
  tone: NotificationTone
}

export const notifications = reactive<Notification[]>([])

let nextId = 0

export function dismissNotification(id: number): void {
  const index = notifications.findIndex(notification => notification.id === id)
  if (index !== -1) notifications.splice(index, 1)
}

export function notify(message: string, tone: NotificationTone = 'info'): number {
  const id = ++nextId
  notifications.push({ id, message, tone })
  window.setTimeout(() => dismissNotification(id), tone === 'error' ? 8000 : 6000)
  return id
}
