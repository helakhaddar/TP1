import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoModel } from 'src/todo-model';
import { TodoStatusEnum } from 'src/todo-status-enum';
import { uuid } from 'uuidv4';
@Controller('to-do-controller')
export class ToDoControllerController {
    private todos=[];
    @Get()
    getTodos()
    {return this.todos;
    }

    @Post('add')
     addToDo(){
     return this.todos.push(new TodoModel(uuid,'add','addToDo',new Date(),TodoStatusEnum.waiting);

     }  

   @Get('getById/:id')
   getToDoByID(@Param()params){
       const id =params.id;
       const todo= this.todos.find((element)=> element.id === id)
       if (todo)
       {return todo;}
       else { return 'not found';}
   }


   @Delete('/:id')
    deleteTodoById(@Param() params) {
        const id = params.id;
        const todo = this.todos.find((element) => element.id === id);
        if (todo) {
            const todoId = this.todos.indexOf(todo);
            this.todos.splice(todoId, 1);
            return this.todos;
        } else {
            return 'not found';
        }
    }

    @Put('/:id')
    updateTodoById(@Param() params, @Body todoModelUpdate: TodoModel) {
        const id = params.id;
        const todo = this.todos.find((element) => element.id === id);
        if (todo) {
            const todoId = this.todos.indexOf(todo);
            if (todoModelUpdate.name !== undefined)
                this.todos[todoId].name = todoModelUpdate.name;
            if (todoModelUpdate.description !== undefined)
                this.todos[todoId].description = todoModelUpdate.description;
            if (todoModelUpdate.status !== undefined)
                this.todos[todoId].status = todoModelUpdate.status);
            return this.todos;
        } else {
            return 'not found';
        }
    }
}




