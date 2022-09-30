import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('premier')
export class PremierController {

    @Get()
    getHello():string{
        return this.getHello();
    }

    @Post()
    postHello():string{
        return this.postHello();
    }

    @Put()
    updateHello():string{
        return this.updateHello();
    }

    @Delete()
    deleteHello(){
        return this.deleteHello();
    }

    @Patch()
    patchHello():string{
        return this.patchHello();
    }


}
