import type { HttpContext } from '@adonisjs/core/http'
import Todo from '#models/todo'

export default class TodosController {
  async index(ctx: HttpContext) {
    const todos = await Todo.all()
    return ctx.view.render('index', { todos })
  }
  async create(ctx: HttpContext) {
    const data = ctx.request.only(['title'])
    const todo = new Todo()
    todo.title = data.title
    await todo.save()
    return ctx.response.redirect().toRoute('index')
  }
  async toggle(ctx: HttpContext) {
    const todoId = ctx.params.id
    const todo = await Todo.findOrFail(todoId)
    todo.status = todo.status === 'Done' ? 'Not Done' : 'Done'
    await todo?.save()

    return ctx.response.redirect().toRoute('index')
  }
}
