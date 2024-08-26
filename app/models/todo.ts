import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

type Status = 'Done' | 'Not Done'
export default class Todo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare status: Status

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
