/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const TodosController = () => import('#controllers/todos_controller')

router.get('/', [TodosController, 'index']).as('index')
router.post('/create', [TodosController, 'create']).as('create')
router.get('/toggle/:id', [TodosController, 'toggle']).as('toggle')
